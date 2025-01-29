"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/context/authContext";
import createCheckout from "../config/service/createCheckOut";
import { Trash } from "lucide-react";

const Line = () => {
  return (
    <div className="w-full h-[2px] bg-[#ffffff1c] my-[5px] md:my-[20px]"></div>
  );
};

const CartComponent = ({ image, title, price, size, id, quantity }) => {
  const { setCart, removeItemFromCart } = useContext(AuthContext);

  // Handle quantity update (increase/decrease)
  const updateQuantity = (id, action) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity =
            action === "increase" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }; // Prevent quantity from going below 1
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Handle removing the item from cart
  const handleDelete = () => {
    removeItemFromCart(id, size);
  };

  return (
    <div className="flex gap-[10px] md:gap-[30px] justify-center items-start mt-[50px] md:mt-[80px]">
      <div>
        <Image
          src={image}
          className="w-[180px] md:min-w-[200px]"
          width={200}
          height={0}
          alt="alt"
        />
      </div>
      <div className="w-full">
        <div>
          <div className=" text-[14px] md:text-[25px] font-bold text-white ">
            {title}
          </div>
          <div className="text-[15px] md:text-[17px] font-thin text-white ">
            ₹ {price}
          </div>
        </div>
        <Line />
        <div className="text-[#ffffff70] text-[13px] md:text-[17px]">
          Size: {size}
        </div>
        <Line />
        <div className="flex justify-between">
          <div className="flex gap-[10px] items-center justify-start">
            <div
              className="w-[25px] md:w-[40px] text-white flex justify-center items-center h-[25px] md:h-[40px] border-[1px] border-[#8d8d8d]"
              onClick={() => updateQuantity(id, "decrease")}
            >
              -
            </div>
            <div className="w-[25px] md:w-[40px] text-white flex justify-center items-center h-[25px] md:h-[40px]">
              {quantity} {/* Display current quantity */}
            </div>
            <div
              className="w-[25px] md:w-[40px] text-white flex justify-center items-center h-[25px] md:h-[40px] border-[1px] border-[#8d8d8d]"
              onClick={() => updateQuantity(id, "increase")}
            >
              +
            </div>
          </div>
          {/* Add delete button */}
          <button
            className="text-[#ff0000] text-[14px] md:text-[18px] mt-[10px] cursor-pointer"
            onClick={handleDelete}
          >
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function page() {
  const { cart, setCart, emptyCart } = useContext(AuthContext);
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const checkout = async () => {
    const url = await createCheckout(cart);
    console.log(url);
    window.location.href = url.checkoutUrl;
  };

  return (
    <div className="min-h-screen h-fit w-full bg-black pt-[165px] pb-[80px]  ">
      <div className=" w-[95%] md:w-[80%] m-auto ">
        <div className="flex justify-between items-center gap-[30px]">
          <div className=" text-[25px] md:text-[30px] font-semibold text-white ">
            SHOPPING BAG
          </div>
          <button
            onClick={emptyCart}
            className="text-[#ffffff85] text-[15px] md:text-[18px] "
          >
            CLEAR ALL
          </button>
        </div>

        <div>
          {cart?.map((item, index) => (
            <CartComponent
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              size={item.size}
              id={item.id}
              quantity={item.quantity}
            />
          ))}
        </div>
        {cart.length !== 0 ? (
          <>
            <div className="flex justify-between items-start gap-[30px] mt-[80px]">
              <div>
                <div className=" text-[21px] md:text-[30px] text-white font-semibold">
                  SUB TOTAL
                </div>
              </div>
              <div className=" text-[21px] md:text-[20px] text-white font-medium">
                ₹ {calculateSubtotal()}
              </div>
            </div>
            <div className="text-[13px] md:text-[17px] font-thin text-white mb-[80px]">
              Taxes and shipping calculated at checkout.
            </div>
          </>
        ) : (
          <div className="min-h-[400px] text-white text-[20px] flex justify-center items-center">
            Your bag is empty!
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[30px]">
          <Link
            href="/"
            className="flex justify-center items-center w-full h-[40px] border-[1px] border-[#8d8d8d] text-white"
          >
            CONTINUE SHOPPING
          </Link>
          <button
            disabled={cart.length === 0}
            // href="/checkout"
            className={` ${
              cart.length === 0
                ? "cursor-not-allowed bg-[#ffffff80]"
                : "cursor-pointer bg-white"
            } flex justify-center items-center w-full h-[40px] border-[1px] border-[#8d8d8d] `}
            onClick={checkout}
          >
            PROCCED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
}
