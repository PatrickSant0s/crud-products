import styled from "styled-components";

export const Item = styled.div`
  background: #fff;
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditButton = styled.button`
  background: #4a90e2;
  border: none;
  color: white;
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #357ab8;
  }
`;

export const DeleteButton = styled.button`
  background: #e74c3c;
  border: none;
  color: white;
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #c0392b;
  }
`;
