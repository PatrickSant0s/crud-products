import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
`;

export const FilterInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  margin: 2rem 0 1.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 0 3px rgba(0, 119, 255, 0.2);
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const PageButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: ${({ active }) => (active ? "#0077ff" : "#f0f0f0")};
  color: ${({ active }) => (active ? "white" : "black")};
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s ease;

  &:hover {
    background: ${({ active }) => (active ? "#005fcc" : "#e0e0e0")};
  }
`;
