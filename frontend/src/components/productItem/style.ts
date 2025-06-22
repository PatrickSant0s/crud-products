import styled from "styled-components";
export const Item = styled.li`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;
export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #e63946;
  margin-left: auto;
  display: flex;

  &:hover {
    opacity: 0.8;
  }
`;
