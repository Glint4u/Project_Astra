"use client";
import React, { useState } from "react";
import createCheckout from "../config/service/createCheckOut";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    countryCode: "CA",
    oneTimeUse: false,
    address1: "",
    address2: "",
    city: "",
    province: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const checkout = async () => {
    const url = await createCheckout(cart, formData);
    window.location.href = url;
  };

  return (
    <div className="min-h-screen pb-[50px] bg-gray-900 text-gray-100 flex items-center justify-center p-4 pt-[130px] md:pt-[150px]">
      <form
        onSubmit={checkout}
        className="w-full max-w-2xl space-y-6 bg-gray-800 p-8 rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6">Buyer Identity Form</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="countryCode"
              className="block text-sm font-medium mb-1"
            >
              Country Code
            </label>
            <select
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="IN">IN</option>
              <option value="US">US</option>
              {/* Add more country codes as needed */}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="oneTimeUse"
              name="oneTimeUse"
              checked={formData.oneTimeUse}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
            />
            <label htmlFor="oneTimeUse" className="text-sm font-medium">
              One-time use address
            </label>
          </div>

          <div>
            <label
              htmlFor="address1"
              className="block text-sm font-medium mb-1"
            >
              Address Line 1
            </label>
            <input
              type="text"
              id="address1"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="150 Elgin Street"
              required
            />
          </div>

          <div>
            <label
              htmlFor="address2"
              className="block text-sm font-medium mb-1"
            >
              Address Line 2
            </label>
            <input
              type="text"
              id="address2"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="8th Floor"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ottawa"
              required
            />
          </div>

          <div>
            <label
              htmlFor="province"
              className="block text-sm font-medium mb-1"
            >
              Province
            </label>
            <input
              type="text"
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ontario"
              required
            />
          </div>

          <div>
            <label htmlFor="zip" className="block text-sm font-medium mb-1">
              ZIP / Postal Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="K2P 1L4"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
