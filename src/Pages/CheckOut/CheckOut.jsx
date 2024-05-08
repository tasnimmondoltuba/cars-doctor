import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import checkout from "../../assets/images/checkout/checkout.png";
import { authContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(authContext);

  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const email = form.email.value;
    const message = form.message.value;
    const checking = {
      customerName: name,
      date,
      price: price,
      email,
      message,
      service: title,
      img,
      service_id: _id,
    };
    console.log(name, email, price, date, message, checking);

    fetch(`http://localhost:5000/checkings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(checking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: " Service book successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="relative  w-full">
        <img src={checkout} alt="" className="h-[350px] w-full rounded-xl" />
        <h2 className=" bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 0)] absolute flex items-center h-full rounded-xl left-0 top-0 text-white text-4xl font-bold pl-10 pt-24 pb-4">
          Check Out
        </h2>
        <div className="absolute left-10 bottom-10 mx-auto">
          <button className=" font-bold py-4 px-8 rounded-lg bg-purple-400">
            Home/Checkout
          </button>
        </div>
      </div>

      {/* importent form */}

      <div className="bg-[#F3F3F3] my-20 rounded-lg p-14">
        <h2 className="text-3xl font-bold text-center">
          Book service: {title}
        </h2>
        <form onSubmit={handleCheckOut} className="card-body">
          <div className="flex items-center justify-between gap-8">
            <div className="form-control w-1/2">
              {/* <label className="label">
            <span className="label-text">Name</span>
          </label> */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              {/* <label className="label">
            <span className="label-text">Password</span>
          </label> */}
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-8">
            <div className="form-control w-1/2">
              {/* <label className="label">
            <span className="label-text">Password</span>
          </label> */}
              <input
                type="text"
                name="price"
                defaultValue={"$" + price}
                placeholder="Due Amount"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              {/* <label className="label">
            <span className="label-text">Password</span>
          </label> */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <textarea
              placeholder="Your Message"
              name="message"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            {/* <button className="btn bg-purple-400 font-bold text-lg"> */}
            <input
              type="submit"
              value="Order Confirm"
              className="btn bg-purple-400 font-bold text-lg"
            />
            {/* </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
