import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: 18rem 1fr 1fr;
    gap: 1.6rem;
  }

  /* Mobile */
  @media (max-width: 640px) {
    grid-template-columns: 1fr; /* stack everything vertically */
    gap: 1rem;
    padding: 1rem 0;

    &:has(button) {
      flex-direction: column; /* stack buttons vertically */
      align-items: stretch;
      gap: 0.8rem;
    }
  }
`;

const Label = styled.label`
  font-weight: 500;

  @media (max-width: 640px) {
    margin-bottom: 0.4rem;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);

  @media (max-width: 640px) {
    font-size: 1.3rem;
  }
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
