"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, LockKeyhole } from "lucide-react";
import AstraLogo from "../../../public/LockupPage/AstraLogo.png";
import { koulen } from "../fonts";
import Timer from "../components/Timer.js";

export default function LockUp() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div className="w-screen h-screen lockup-bg flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center justify-center  w-[90%]">
        <div className="flex items-center justify-between w-[90%] max-sm:mb-[50px]">
          <Image className="w-[20%] h-auto max-sm:w-[60%]" src={AstraLogo} alt="astralogo" />
          <div className="bg-[#545454]/50 p-[10px] shadow-md rounded-full cursor-pointer">
            <LockKeyhole size={20} color="white" />
          </div>
        </div>

        <Timer initialTime={60}/>

        <form
          action=""
          className={`flex flex-col items-center justify-center w-[90%] sm:w-[70%] md:w-[500px] gap-[30px] mt-[30px] ${koulen.className} `}
        >
          <div className="flex flex-col items-center gap-[15px] w-full">
            <input
              required
              className="input placeholder:text-white max-sm:placeholder:text-[15px] max-sm:h-[50px]"
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              required
              className="input placeholder:text-white max-sm:placeholder:text-[15px] max-sm:h-[50px]"
              type="tel"
              placeholder="PHONE NO"
              value={number}
              onChange={(e) => {
                setNumber(e.target.number);
              }}
            />
          </div>
          <button
            className="bg-[#FFFDFD] text-black w-[90%] h-[65px] font-semibold text-[20px] max-sm:h-[50px] max-sm:text-[18px]"
            type="submit"
          >
            NOTIFY ME
          </button>
        </form>
        <p className="text-white underline cursor-pointer mb-[40px] max-sm:text-[12px] max-sm:mb-[100px] ">
          Join the exclusive early access to our next drop!
        </p>
        <div className="flex text-white gap-x-[10px] items-center">
          <p className="max-sm:text-[13px]">Follow on: </p>
          <Instagram size={18} className="cursor-pointer max-sm:size-4" />
        </div>
      </div>
    </div>
  );
}
