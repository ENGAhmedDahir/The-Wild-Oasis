import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";

import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";

import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";
import ConfirmDelete from "../../ui/ConfirmDelete";

/* ================= STYLED ================= */

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;
const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

/* ================= COMPONENT ================= */

function BookingRow({
  booking: {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();

  const { checkout, isCheckingOut } = useCheckout();
  const { isDeleting, deleteBooking } = useDeleteBooking();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <Table.Cell label="Cabin">
        <Cabin>{cabinName}</Cabin>
      </Table.Cell>

      <Table.Cell label="Guest">
        <Stacked>
          <span>{guestName}</span>
          <span>{email}</span>
        </Stacked>
      </Table.Cell>

      <Table.Cell label="Dates">
        <Stacked>
          <span>
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}{" "}
            → {numNights} nights
          </span>
          <span>
            {format(new Date(startDate), "MMM dd yyyy")} —{" "}
            {format(new Date(endDate), "MMM dd yyyy")}
          </span>
        </Stacked>
      </Table.Cell>

      <Table.Cell label="Status">
        <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
      </Table.Cell>

      <Table.Cell label="Amount">
        <Amount>{formatCurrency(totalPrice)}</Amount>
      </Table.Cell>

      <Table.Cell label="">
        <RightAligned>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={bookingId} />

              <Menus.List id={bookingId}>
                <Menus.Button
                  icon={<HiEye />}
                  onClick={() => navigate(`/bookings/${bookingId}`)}
                >
                  See details
                </Menus.Button>

                {status === "unconfirmed" && (
                  <Menus.Button
                    icon={<HiArrowDownOnSquare />}
                    onClick={() => navigate(`/checkin/${bookingId}`)}
                  >
                    Check in
                  </Menus.Button>
                )}

                {status === "checked-in" && (
                  <Menus.Button
                    icon={<HiArrowUpOnSquare />}
                    onClick={() => checkout(bookingId)}
                    disabled={isCheckingOut}
                  >
                    Check out
                  </Menus.Button>
                )}

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>
            </Menus.Menu>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="Booking"
                disabled={isDeleting}
                onConfirm={() => deleteBooking(bookingId)}
              />
            </Modal.Window>
          </Modal>
        </RightAligned>
      </Table.Cell>
    </Table.Row>
  );
}

export default BookingRow;
