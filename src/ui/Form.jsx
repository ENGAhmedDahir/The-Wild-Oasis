import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
      max-width: 100%; /* prevent overflow on small screens */
    `}

  overflow: hidden;
  font-size: 1.4rem;

  /* Tablet */
  @media (max-width: 1024px) {
    ${(props) =>
      props.type === "regular" &&
      css`
        padding: 2rem 3rem;
      `}

    ${(props) =>
      props.type === "modal" &&
      css`
        width: 60rem;
        padding: 2rem 3rem;
        overflow-y: scroll;
      `}
  }

  /* Mobile */
  @media (max-width: 640px) {
    ${(props) =>
      props.type === "regular" &&
      css`
        padding: 1.6rem 2rem;
      `}

    ${(props) =>
      props.type === "modal" &&
      css`
        width: 100%;
        padding: 1.6rem 1.8rem;
        border-radius: var(--border-radius-sm);
      `}
    font-size: 1.2rem;
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
