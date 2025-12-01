import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;

  /* Tablet adjustments */
  @media (max-width: 1024px) {
    gap: 0.7rem;
    padding: 1rem 0;
  }

  /* Mobile adjustments */
  @media (max-width: 640px) {
    gap: 0.6rem;
    padding: 0.8rem 0;
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1.4rem;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
