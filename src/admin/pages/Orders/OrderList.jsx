import React from "react";

export default function OrderList({ data }) {
  return (
    <div className="wrap rounded-lg shadow-lg w-full p-3 border-t border-gray-500 py-5">
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
            {data.map((i, index) => (
              <tr
                key={index}
                className="hover:bg-primary hover:bg-opacity-5 transition-all"
              >
                <td>
                  <div>
                    <h1>#000023 . Sheriff Order </h1>
                    <span className="wrap text-xs">love hoodie . +2 items</span>
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
  );
}
