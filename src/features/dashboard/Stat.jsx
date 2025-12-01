import styled from "styled-components";

const StyledStat = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: 5.4rem 1fr;
    padding: 1.2rem;
  }

  /* Mobile */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    text-align: center;
    row-gap: 1rem;
    width: 100%; /* ⭐ Make sure it fits nicely */
  }
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Dynamic background using prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }

  /* Tablet */
  @media (max-width: 1024px) {
    & svg {
      width: 2.6rem;
      height: 2.6rem;
    }
  }

  /* Mobile */
  @media (max-width: 640px) {
    grid-row: auto;
    margin: 0 auto; /* center icon */
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);

  /* Mobile */
  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;

  /* Mobile */
  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}

export default Stat;
