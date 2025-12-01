import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
    gap: 0.8rem;
    padding: 1.2rem 0;
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 9rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  & > button,
  & > a {
    display: inline-block;
    width: 100%;
  }
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>

      <ButtonWrapper>
        {status === "unconfirmed" ? (
          <Button
            size="small"
            variation="primary"
            as={Link}
            to={`/checkin/${id}`}
          >
            Check in
          </Button>
        ) : (
          <CheckoutButton bookingId={id} />
        )}
      </ButtonWrapper>
    </StyledTodayItem>
  );
}

export default TodayItem;
