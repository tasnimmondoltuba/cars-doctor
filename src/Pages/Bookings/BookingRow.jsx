import React from "react";
import Swal from "sweetalert2";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, price, date, customerName, email, service, status } =
    booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-square btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-square rounded-sm w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
            <div className="text-sm opacity-50">{date}</div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>{price}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-purple-600">confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Pleace Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
