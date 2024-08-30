import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ProductList({ data }) {
  return (
    <div className="overflow-x-scroll">
      <table className="w-full">
        <thead className="bg-gray-200 rounded-lg">
          <tr>
            <td>Product</td>
            <td>Collection</td>
            <td>In Stock</td>
            <td>Price</td>
            <td>Status</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data.map((i, index) => (
            <tr key={index}>
              <td className="min-w-[300px]">
                <div className="flex gap-8 items-center">
                  <div className="img-wrap">
                    <img
                      src="/asset/p1.png"
                      alt="Perfume"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <span>Rosemary Perfume</span>
                </div>
              </td>
              <td className="min-w-[200px]">
                <span>Kindle Collection</span>
              </td>
              <td>
                <div className="flex items-center ">
                  <span>12</span>{" "}
                </div>
              </td>
              <td>
                <div className="flex items-center">
                  <span>12,000</span>
                </div>
              </td>
              <td>
                <span className="text-xs p-2 bg-green-400 bg-opacity-10 rounded-lg text-green-400">
                  Published
                </span>
              </td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <span className="flex bg-yellow-500 bg-opacity-20 text-yellow-500 rounded-lg p-2">
                    <FaEdit />
                  </span>
                  <span className="flex bg-red-500 bg-opacity-20 text-red-500 rounded-lg p-2">
                    <FaTrash />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
