import React, { useContext, useEffect, useState } from "react";
import checkout from "../../assets/images/checkout/checkout.png";
import { authContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(authContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/checkings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/checkings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Delete successful");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/checkings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      cody: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";

          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <div className="relative  w-full">
        <img src={checkout} alt="" className="h-[350px] w-full rounded-xl" />
        <h2 className=" bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 0)] absolute flex items-center h-full rounded-xl left-0 top-0 text-white text-4xl font-bold pl-10 pt-24 pb-4">
          Bookings For Service
        </h2>
        <div className="absolute left-10 bottom-10 mx-auto">
          <button className=" font-bold py-4 px-8 rounded-lg bg-purple-400">
            Home/Booking
          </button>
        </div>
      </div>

      <div className="overflow-x-auto my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl font-bold">
              <th></th>
              <th>Service</th>
              <th>Name</th>
              <th>email</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <BookingRow
                key={index}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
