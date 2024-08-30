import React from "react";
import Layout from "../../Layout/Layout";
import { FaDownload, FaSearch } from "react-icons/fa";
import { CiBoxes, CiShoppingTag } from "react-icons/ci";
import { RxPlus } from "react-icons/rx";
import { IoIosRefresh } from "react-icons/io";
import IconCard from "../../../ui/IconCard";
import { FaNairaSign } from "react-icons/fa6";
import ProductList from "./ProductList";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const statsData = [
    {
      value: 152,
      text: "Total Inventory",
      icon: <FaNairaSign />,
      link: "/administration/orders",
    },
    {
      value: 4,
      text: "Total Product Sold",
      icon: <CiShoppingTag />,
      link: "/administration/orders",
    },
    {
      value: 0,
      text: "Out of stock",
      icon: <CiBoxes />,
      link: "/administration/orders",
    },
  ];
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="wrap container mx-auto px-10 py-5">
        <div className="header flex justify-between items-center">
          <h1 className="text-3xl font-bold">Products</h1>
          <div className="wrap flex gap-2">
            <button className="flex items-center gap-3 p-3 bg-gray-300 text-sm rounded-lg">
              <FaDownload />
              Export CSV
            </button>
            <button
              className="flex items-center gap-3 p-3 bg-primary text-sm rounded-lg text-white"
              onClick={() => navigate("add")}
            >
              <RxPlus />
              Add New Product
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {statsData.map((i, index) => (
            <IconCard value={i.value} text={i.text} icon={i.icon} key={index} />
          ))}
        </div>

        <div className="wrap mt-10">
          <div className="filters flex justify-between py-2">
            <div className="wrap flex gap-3">
              <button className="p-2 bg-gray-200 rounded-lg">
                <IoIosRefresh />
              </button>

              <select className="bg-gray-200 rounded-lg px-2 py-3 text-sm">
                <option value="#">Status</option>
                <option value="#">Unpublished</option>
                <option value="#">Published</option>
              </select>

              <select className="bg-gray-200 rounded-lg px-2 py-3 text-sm">
                <option value="#">Filter by Collection</option>
                <option value="#">Krindle collection</option>
                <option value="#">Pectorial collection</option>
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                <FaSearch className="text-primary" />
              </div>
              <input
                type="text"
                id="phone-input"
                aria-describedby="helper-text-explanation"
                className="bg-gray-200 text-gray-800 text-sm rounded-lg block w-full pe-10 px-3 py-2 dark:bg-transparent border-primary placeholder-gray-400"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Search"
                required
              />
            </div>
          </div>
          <ProductList data={[1, 2, 3, 4]} />
        </div>
      </div>
    </Layout>
  );
}
