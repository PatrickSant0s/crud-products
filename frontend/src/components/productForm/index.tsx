import React from 'react';
import { Form, Input, Select, Button, Row, Label, FormCard } from './styles';

export function ProductForm() {
  return (
    <div>
      <h1>Product Form</h1>
      <FormCard>
        <Form>
          <Input type="Model" name="Model" placeholder="Modelo" />
          <Input type="brand" name="brand" placeholder="Marca" />
          <Select name="type">
            <option value="Prime">Prime</option>
            <option value="Zoom">Zoom</option>
            <option value="Macro">Macro</option>
            <option value="Tilt-Shift">Tilt-Shift</option>
          </Select>
          <Input
            type="focalLength"
            name="focalLength"
            placeholder="Comprimento focal"
          />
          <Input
            type="mount"
            name="mount"
            placeholder="Nome oficial da montaria"
          />
          <Input
            type="maxAperture"
            name="maxAperture"
            placeholder="Abertura máxima"
          />
          <Input type="weight" name="weight" placeholder="Peso" />
          <Row>
            <Label>
              <Input type="checkbox" name="hasStabilization" />
              Has Stabilization
            </Label>
            <Label>
              <Input type="checkbox" name="active" />
              Active{' '}
            </Label>
          </Row>
          <Button type="submit">Submit</Button>
        </Form>
      </FormCard>
    </div>
  );
}
