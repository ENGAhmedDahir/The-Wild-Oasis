import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: 7px;
  background: var(--color-grey-0);
  overflow: hidden;
  font-size: 1.4rem;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;

  @media (max-width: 1024px) {
    column-gap: 1.6rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-grey-600);

  @media (max-width: 640px) {
    display: none;
  }
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 640px) {
    background: var(--color-grey-50);
    border-radius: 6px;
    margin: 2rem;
    padding: 1.6rem;
  }
`;

const Cell = styled.div`
  display: flex;
  gap: 0.6rem;

  &::before {
    content: attr(data-label);
    font-weight: 600;
    color: var(--color-grey-600);
    display: none;
    min-width: 6.5rem;
  }

  @media (max-width: 640px) {
    &::before {
      display: block;
    }
  }
`;

const StyledBody = styled.section``;

const Footer = styled.footer`
  padding: 1.2rem;
  background: var(--color-grey-50);
  display: flex;
  justify-content: center;
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns}>
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function CellWrapper({ label = "", children }) {
  return <Cell data-label={label ? `${label}:` : ""}>{children}</Cell>;
}

function Body({ data, render }) {
  if (!data.length) return <p style={{ padding: "2rem" }}>No data found</p>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Cell = CellWrapper;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
