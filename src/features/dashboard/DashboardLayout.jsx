import styled from "styled-components";
import { useRecentBookings } from "./UseRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./UseRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivities from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  gap: 2.4rem;

  /* Desktop */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 34rem auto;

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto auto;
  }

  /* Mobile → 2 columns for Stats */
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr); /* ⭐ Required change */
    grid-template-rows: auto;
    gap: 1.6rem;
  }
`;

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings();
  const {
    isLoading: isLoading2,

    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();
  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        cabinCount={cabins.length}
        numDays={numDays}
      />

      <TodayActivities />
      <DurationChart confirmedStays={confirmedStays} />

      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
