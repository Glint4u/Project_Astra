"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Instagram, LockKeyhole } from "lucide-react";
import AstraLogo from "../../../public/LockupPage/AstraLogo.png";
import { koulen } from "../fonts";
import Timer from "../components/Timer.js";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function LockUp() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Submitting...");
    setLoading(true);
    try {
      const response = await fetch("/api/lockup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phoneNumber: number }),
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        toast.success("Successfully submitted!", { id: toastId });
        setEmail("");
        setNumber("");
      } else {
        setLoading(false);
        throw new Error(data.message || "Something went wrong!");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="w-screen h-screen lockup-bg flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center justify-center w-[90%]">
        <div className="flex items-center justify-between w-[90%] max-sm:mb-[20px]">
          <Image
            className="w-[20%] h-auto max-sm:w-[60%]"
            src={AstraLogo}
            alt="astralogo"
          />
          <div className="bg-[#545454]/50 p-[10px] shadow-md rounded-full cursor-pointer">
            <LockKeyhole size={20} color="white" />
          </div>
        </div>

        <Timer initialTime={60} />

        <form
          onSubmit={handleSubmit}
          className={`flex flex-col items-center justify-center w-[90%] sm:w-[70%] md:w-[500px] gap-[30px] mt-[30px] ${koulen.className}`}
        >
          <div className="flex flex-col items-center gap-[15px] w-full">
            <input
              required
              className="input placeholder:text-white max-sm:placeholder:text-[15px] max-sm:h-[50px] tracking-[1px]"
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              className="input placeholder:text-white max-sm:placeholder:text-[15px] max-sm:h-[50px] tracking-[1px] "
              type="tel"
              placeholder="PHONE NO"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <button
            className={`bg-[#FFFDFD] text-black w-[90%] h-[65px] font-semibold text-[20px] max-sm:h-[50px] max-sm:text-[18px] tracking-[1px] ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={loading}
          >
            NOTIFY ME
          </button>
        </form>
        <p className="text-white underline cursor-pointer mb-[38px] max-sm:text-[12px] mt-[10px]">
          Join the exclusive early access to our next drop!
        </p>
        <div className="flex text-white gap-x-[10px] items-center -mt-5">
          <p className="max-sm:text-[13px]">Follow on: </p>
          <Link href="https://www.instagram.com/projectastra.in?igsh=MXNtOXc2YzFsYXBweQ==">
            <Instagram size={18} className="cursor-pointer max-sm:size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
