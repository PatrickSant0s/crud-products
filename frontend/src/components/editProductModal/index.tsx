import { useState, useEffect } from "react";
import { Product } from "../../types/product";
import { updateProduct } from "../../services/api";
import {
  Overlay,
  ModalCard,
  Input,
  Button,
  CloseButton,
  Label,
  Select,
  CheckboxContainer,
} from "./style";

type Props = {
  product: Product | null;
  onClose: () => void;
  onUpdated: () => void;
};

export function EditProductModal({ product, onClose, onUpdated }: Props) {
  const [form, setForm] = useState<Product | null>(product);

  useEffect(() => {
    setForm(product);
  }, [product]);

  if (!form) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) =>
      prev
        ? {
            ...prev,
            [name]:
              type === "checkbox"
                ? (e.target as HTMLInputElement).checked
                : name === "weight"
                ? Number(value)
                : value,
          }
        : prev
    );
  };

  const handleSubmit = async () => {
    if (!form) return;
    const { _id, ...rest } = form;
    await updateProduct(_id, rest);
    onUpdated();
    onClose();
  };

  return (
    <Overlay>
      <ModalCard>
        <h2>Editar Produto</h2>

        <Label>Modelo</Label>
        <Input name="model" value={form.model} onChange={handleChange} />

        <Label>Marca</Label>
        <Input name="brand" value={form.brand} onChange={handleChange} />

        <Label>Tipo</Label>
        <Select name="type" value={form.type} onChange={handleChange}>
          <option value="Prime">Prime</option>
          <option value="Zoom">Zoom</option>
          <option value="Macro">Macro</option>
          <option value="Tilt-Shift">Tilt-Shift</option>
        </Select>

        <Label>Distância Focal</Label>
        <Input
          name="focalLength"
          value={form.focalLength}
          onChange={handleChange}
        />

        <Label>Abertura Máxima</Label>
        <Input
          name="maxAperture"
          value={form.maxAperture}
          onChange={handleChange}
        />

        <Label>Montagem</Label>
        <Input name="mount" value={form.mount} onChange={handleChange} />

        <Label>Peso (g)</Label>
        <Input
          type="number"
          name="weight"
          value={form.weight}
          onChange={handleChange}
        />

        <CheckboxContainer>
          <label>
            <input
              type="checkbox"
              name="hasStabilization"
              checked={form.hasStabilization}
              onChange={handleChange}
            />
            Estabilização
          </label>
        </CheckboxContainer>

        <CheckboxContainer>
          <label>
            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleChange}
            />
            Ativo
          </label>
        </CheckboxContainer>

        <Button onClick={handleSubmit}>Salvar</Button>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalCard>
    </Overlay>
  );
}
