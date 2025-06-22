import styled from "styled-components";

// Fundo escurecido com animação suave
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 1rem; // margem segura em telas pequenas

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  animation: fadeIn 0.25s ease;
`;

export const ModalCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: slideUp 0.25s ease;

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 14px;
  }

  /* Scroll bonito (opcional) */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.95rem;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.65rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  transition: border 0.2s;

  &:focus {
    outline: none;
    border-color: #0077cc;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.65rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  transition: border 0.2s;

  &:focus {
    outline: none;
    border-color: #0077cc;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #0077cc;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #005fa3;
  }

  &:focus {
    outline: 2px solid #005fa3;
    outline-offset: 2px;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  color: #999;
  border: none;
  align-self: flex-end;
  font-size: 0.95rem;
  cursor: pointer;
  margin-top: 0.3rem;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;

  input[type="checkbox"] {
    transform: scale(1.1);
    accent-color: #0077cc;
  }

  label {
    font-size: 0.95rem;
    color: #333;
  }
`;
