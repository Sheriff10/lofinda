import React from "react";
import Layout from "../../Layout/Layout";
import IconCard from "../../../ui/IconCard";
import { CiShoppingTag } from "react-icons/ci";
import { LuGlobe2, LuShoppingBag, LuUsers2 } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const statsData = [
    {
      value: 0,
      text: "Orders",
      icon: <LuShoppingBag />,
      link: "/administration/orders",
    },
    {
      value: 350000,
      text: "Product sold",
      icon: <CiShoppingTag />,
      link: "/administration/orders",
    },
    {
      value: 4,
      text: "New Customer",
      icon: <LuUsers2 />,
      link: "/administration/orders",
    },
    {
      value: 34,
      text: "Website Visit",
      icon: <LuGlobe2 />,
      link: "/administration/orders",
    },
  ];
  const dum = [1, 1, 1, 1];
  return (
    <Layout>
      <div className="wrap container px-10 py-5 mx-auto">
        <div className="welcome-text text-4xl text-black font-extrabold">
          <h1>Hello Admin</h1>
        </div>

        <div className="wrap mt-5 rounded-lg shadow-md w-full p-3 border-t border-gray-500">
          <div className="header text-gray-600">
            <h1 className="font-bold text-2xl">Business Overview</h1>
            <span>Here is how your business is doing today</span>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {statsData.map((i, index) => (
              <IconCard
                value={i.value}
                text={i.text}
                icon={i.icon}
                key={index}
              />
            ))}
          </div>
        </div>
        {/* Quick Action */}
        <div className="wrap mt-16 rounded-lg shadow-lg w-full p-3 border-t border-gray-500 py-5">
          <div className="header mb-3 font-bold">
            <h3>Quick Action</h3>
          </div>
          <Link className="flex items-center gap-2 bg-gray-100 p-2 mb-2 rounded-lg text-primary">
            <LuShoppingBag />
            <span>Create New Order </span>
          </Link>
          <Link className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg text-primary">
            <LuShoppingBag />
            <span>Add a New Product </span>
          </Link>
        </div>

        {/* Recent Orders */}
        <div className="wrap mt-16 rounded-lg shadow-lg w-full p-3 border-t border-gray-500 py-5">
          <div className="overflow-x-scroll">
            <table className="w-full">
              <thead className="bg-gray-200 rounded-lg">
                <tr>
                  <td>Order number & Name</td>
                  <td>Total</td>
                  <td>Status</td>
                  <td>Payment</td>
                  <td>Shipping</td>
                  <td>Date</td>
                </tr>
              </thead>
              <tbody>
                {dum.map((i, index) => (
                  <tr key={index}>
                    <td>
                      <div>
                        <h1>#000023 . Sheriff Order </h1>
                        <span className="wrap text-xs">
                          love hoodie . +2 items
                        </span>
                      </div>
                    </td>
                    <td>
                      <span>#24,000</span>
                    </td>
                    <td>
                      <div className="flex items-center">
                        <span className="text-xs p-2 bg-yellow-400 bg-opacity-10 rounded-lg text-yellow-400">
                          Open
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="text-xs p-2 bg-blue-400 bg-opacity-10 rounded-lg text-blue-400">
                        Processing
                      </span>
                    </td>
                    <td>
                      <span className="text-xs p-2 bg-green-400 bg-opacity-10 rounded-lg text-green-400">
                        Fulfilled
                      </span>
                    </td>
                    <td>
                      <span className="text-xs p-2">07/08/2023</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
