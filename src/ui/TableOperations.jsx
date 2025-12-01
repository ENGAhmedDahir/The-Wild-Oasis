import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  /* Mobile first: stack vertically on small screens */
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start; /* align buttons to left */
    gap: 1rem;
  }

  /* Optional: adjust for tablets */
  @media (max-width: 1024px) {
    gap: 1.2rem;
  }
`;

export default TableOperations;
