import styled from "styled-components";
import Button from "./Button";

import { WrapButton } from "./WraperButton";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & h3 {
    font-size: 2rem;
    font-weight: 500;
    @media (max-width: 640px) {
      margin-top: 1rem;
    }
  }

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  /* Tablet breakpoint (≤1024px) */
  @media (max-width: 1024px) {
    width: 32rem;
    & div {
      justify-content: center;
    }
  }

  /* Mobile breakpoint (≤640px) */
  @media (max-width: 640px) {
    width: 25rem;
    gap: 1.6rem;

    & div {
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
      @media (max-width: 640px) {
        flex-direction: row;
      }
    }

    & button {
      width: 100%;
    }
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <h3>Delete {resourceName}</h3>

      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <WrapButton>
        <div>
          <Button
            variation="secondary"
            disabled={disabled}
            onClick={onCloseModal}
          >
            Cancel
          </Button>
          <Button variation="danger" disabled={disabled} onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </WrapButton>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
