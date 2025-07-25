import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { Connection } from 'mongoose';
import { getConnectionToken } from '@nestjs/mongoose';

describe('Products (e2e)', () => {
  let app: INestApplication;
  let dbConnection: Connection;
  let createdProductId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    dbConnection = app.get(getConnectionToken());
  });

  beforeEach(async () => {
    await dbConnection.collection('products').deleteMany({});
  });

  afterAll(async () => {
    await app.close();
  });

  it('/products (POST) should create a new product', async () => {
    const product = {
      model: 'Test Lens',
      brand: 'TestBrand',
      type: 'Macro',
      focalLength: '50mm',
      maxAperture: 'f/1.8',
      mount: 'Canon EF',
      weight: 350,
      hasStabilization: true,
      active: true,
    };

    const res = await request(app.getHttpServer())
      .post('/products')
      .send(product)
      .expect(201);

    expect(res.body).toHaveProperty('_id');
    expect(res.body.model).toBe('Test Lens');

    createdProductId = res.body._id;
  });

  it('/products (GET) should return all products', async () => {
    await request(app.getHttpServer()).post('/products').send({
      model: 'Test',
      brand: 'B',
      type: 'A',
      focalLength: '10',
      maxAperture: '1.2',
      mount: 'EF',
      weight: 100,
      hasStabilization: true,
      active: true,
    });

    const res = await request(app.getHttpServer()).get('/products').expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(1);
  });

  it('/products/:id (GET) should return a product by ID', async () => {
    const product = await request(app.getHttpServer()).post('/products').send({
      model: 'Test Lens',
      brand: 'B',
      type: 'A',
      focalLength: '10',
      maxAperture: '1.2',
      mount: 'EF',
      weight: 100,
      hasStabilization: true,
      active: true,
    });

    const id = product.body._id;

    const res = await request(app.getHttpServer())
      .get(`/products/${id}`)
      .expect(200);

    expect(res.body._id).toBe(id);
  });

  it('/products/:id (PATCH) should update a product', async () => {
    const created = await request(app.getHttpServer()).post('/products').send({
      model: 'Old',
      brand: 'B',
      type: 'A',
      focalLength: '10',
      maxAperture: '1.2',
      mount: 'EF',
      weight: 100,
      hasStabilization: true,
      active: true,
    });

    const id = created.body._id;

    const res = await request(app.getHttpServer())
      .patch(`/products/${id}`)
      .send({ model: 'Updated Model' })
      .expect(200);

    expect(res.body.model).toBe('Updated Model');
  });

  it('/products/:id (DELETE) should remove a product', async () => {
    const created = await request(app.getHttpServer()).post('/products').send({
      model: 'ToDelete',
      brand: 'B',
      type: 'A',
      focalLength: '10',
      maxAperture: '1.2',
      mount: 'EF',
      weight: 100,
      hasStabilization: true,
      active: true,
    });

    const id = created.body._id;

    await request(app.getHttpServer()).delete(`/products/${id}`).expect(204);

    await request(app.getHttpServer()).get(`/products/${id}`).expect(404);
  });
});
