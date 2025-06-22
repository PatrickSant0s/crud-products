import e from "express";
import styled from "styled-components";

export const FormCard = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Select = styled.select`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.95rem;
`;

export const Button = styled.button`
  background: #28a745;
  color: white;
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #218838;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CardTitle = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;
