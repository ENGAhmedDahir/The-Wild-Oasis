import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
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

  /* Tablet */
  @media (max-width: 768px) {
    grid-template-columns: 7rem 2rem 1fr 6rem 8rem;
    gap: 0.8rem;
    font-size: 1.3rem;
  }

  /* Mobile */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 1.2rem 0.8rem;
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

const GuestInfo = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const MobileRow = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const DesktopOnly = styled.div`
  display: contents;

  @media (max-width: 640px) {
    display: none;
  }
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {/* Desktop Layout */}
      <DesktopOnly>
        {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
        {status === "checked-in" && <Tag type="blue">Departing</Tag>}
        <Flag src={guests.countryFlag} alt={`flag of ${guests.country}`} />
        <Guest>{guests.fullName}</Guest>
        <div>{numNights} nights</div>
        {status === "unconfirmed" && (
          <Button
            size="small"
            variation="primary"
            as={Link}
            to={`/checkin/${id}`}
          >
            Check in
          </Button>
        )}
        {status === "checked-in" && (
          <CheckoutButton bookingId={id} size="small" variation="primary" />
        )}
      </DesktopOnly>

      {/* Mobile Layout */}
      <MobileRow>
        {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
        {status === "checked-in" && <Tag type="blue">Departing</Tag>}
        <div>{numNights} nights</div>
      </MobileRow>

      <GuestInfo>
        <Flag src={guests.countryFlag} alt={`flag of ${guests.country}`} />
        <Guest>{guests.fullName}</Guest>
      </GuestInfo>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && (
        <CheckoutButton bookingId={id} size="small" variation="primary" />
      )}
    </StyledTodayItem>
  );
}

export default TodayItem;
