import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Label, FormCard } from "./styles";
import { validateProductForm, FormData } from "../../services/validation";
import { createProduct } from "../../services/api";
import { Product } from "../../types/product";

type ProductFormProps = {
  onCreated?: (product: Product) => void;
};

export function ProductForm({ onCreated }: ProductFormProps) {
  const [form, setForm] = useState<FormData>({
    model: "",
    brand: "",
    type: "",
    focalLength: "",
    maxAperture: "",
    mount: "",
    weight: "",
    hasStabilization: false,
    active: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;
    setForm((old) => ({
      ...old,
      [name]:
        type === "checkbox" ? (target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validateProductForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setMessage("");

      try {
        const allowedTypes = ["Prime", "Zoom", "Macro", "Tilt-Shift"] as const;
        type ProductType = (typeof allowedTypes)[number];

        const productToSend = {
          ...form,
          type: form.type as ProductType,
          weight: Number(form.weight),
        };
        console.log("Enviando produto:", productToSend);
        const createdProduct = await createProduct(productToSend);

        setMessage(`Produto criado com sucesso! ID: ${createdProduct.id}`);

        setForm({
          model: "",
          brand: "",
          type: "",
          focalLength: "",
          maxAperture: "",
          mount: "",
          weight: "",
          hasStabilization: false,
          active: false,
        });

        // Chama o callback para avisar a home que tem produto novo
        onCreated?.(createdProduct);
      } catch (error) {
        setMessage("Erro ao criar produto. Tente novamente.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div>
      <h1>Product Form</h1>
      <FormCard>
        <Form onSubmit={handleSubmit}>
          <Input
            name="model"
            placeholder="Modelo"
            value={form.model}
            onChange={handleChange}
          />
          {errors.model && <p style={{ color: "red" }}>{errors.model}</p>}

          <Input
            name="brand"
            placeholder="Marca"
            value={form.brand}
            onChange={handleChange}
          />
          {errors.brand && <p style={{ color: "red" }}>{errors.brand}</p>}

          <Select name="type" value={form.type} onChange={handleChange}>
            <option value="">Selecione o tipo</option>
            <option value="Prime">Prime</option>
            <option value="Zoom">Zoom</option>
            <option value="Macro">Macro</option>
            <option value="Tilt-Shift">Tilt-Shift</option>
          </Select>
          {errors.type && <p style={{ color: "red" }}>{errors.type}</p>}

          <Input
            name="focalLength"
            placeholder="Comprimento focal"
            value={form.focalLength}
            onChange={handleChange}
          />
          {errors.focalLength && (
            <p style={{ color: "red" }}>{errors.focalLength}</p>
          )}

          <Input
            name="maxAperture"
            placeholder="Abertura máxima"
            value={form.maxAperture}
            onChange={handleChange}
          />
          {errors.maxAperture && (
            <p style={{ color: "red" }}>{errors.maxAperture}</p>
          )}

          <Input
            name="mount"
            placeholder="Nome oficial da montaria"
            value={form.mount}
            onChange={handleChange}
          />
          {errors.mount && <p style={{ color: "red" }}>{errors.mount}</p>}

          <Input
            name="weight"
            placeholder="Peso em gramas"
            value={form.weight}
            onChange={handleChange}
            type="number"
          />
          {errors.weight && <p style={{ color: "red" }}>{errors.weight}</p>}

          <Row>
            <Label>
              <input
                type="checkbox"
                name="hasStabilization"
                checked={form.hasStabilization}
                onChange={handleChange}
              />
              Has Stabilization
            </Label>

            <Label>
              <input
                type="checkbox"
                name="active"
                checked={form.active}
                onChange={handleChange}
              />
              Active
            </Label>
          </Row>

          <Button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Submit"}
          </Button>
        </Form>
        {message && <p>{message}</p>}
      </FormCard>
    </div>
  );
}
