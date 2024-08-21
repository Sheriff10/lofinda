import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Layout from "../../Layout/Layout";
import { purpleBtnClass } from "../../../utils/classes";
import { useNavigate } from "react-router-dom";

export default function AddCustomer() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="wrap lg:w-1/2 mx-auto p-3 lg:px-0 h-full">
        <div className="form-wrap mt-16 p-5 rounded-lg border">
          <div className="header flex gap-3 items-center my-5">
            <span
              className="text-lg bg-gray-100 rounded-lg p-2 px-3 cursor-pointer"
              onClick={() => navigate("/administration/customer/")}
            >
              <FaArrowLeft />
            </span>
            <h1 className="text-3xl font-bold">Add new customer</h1>
          </div>

          <form>
            <div className="grid grid-cols-2 gap-3">
              <div className="input-wrap">
                <label className="text-sm">
                  Firstname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                  placeholder="Ayomide"
                />
              </div>
              <div className="input-wrap">
                <label className="text-sm">
                  Lastname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                  placeholder="Basit"
                />
              </div>
            </div>
            <div className="input-wrap my-4">
              <label className="text-sm">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                placeholder="sheezey@gmail.com"
              />
            </div>
            <div className="input-wrap">
              <label className="text-sm">Phone number</label>
              <input
                type="text"
                className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                placeholder="08123458598"
              />
            </div>
            <div className="input-wrap mb-5">
              <label className="text-sm">Address</label>
              <input
                type="text"
                className="p-2 w-full bg-gray-100 rounded-lg placeholder-gray-400"
                placeholder="Somewhere, Egbeda, Lagos state, Nigeria "
              />
            </div>
            <div className="btn-wrap absolute left-0 bottom-0 bg-gray-900 w-full px-10 py-3 flex justify-end">
              <div className="wrap">
                <button className="rounded-lg p-3 bg-white text-black mr-3">
                  Add customer
                </button>
                <button className="rounded-lg p-3 bg-primary text-white">
                  Add customer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
