"use client";
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { Instagram, LockKeyhole, X, Eye, EyeClosed } from "lucide-react";
import AstraLogo from "../../public/AstraLogo.png";
import { koulen } from "@/app/fonts";
import Timer from "@/app/utils/Timer";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { AuthContext } from "@/context/authContext";


export default function LockUp() {
  const {isAuthenticated, setAuthenticated} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("")
  const [lockClicked, setLockClicked] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)

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

  const checkPassword = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Verifying...");
    setLoading(true);
    try {
      const response = await fetch("/api/check-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: password }),
      });
      const data = await response.json();
      console.log(data)

      if (response.ok) {
        setLoading(false);
        toast.success("Website Unlocked!", { id: toastId });
        setPassword("")
        setAuthenticated(true)
      } else {
        setLoading(false);
        throw new Error(data.message || "Something went wrong!");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message, { id: toastId });
    }
  }

  return (
    <>
      {
        lockClicked ?
          <div className="bg-[#5b5b5b7c]  w-screen h-screen backdrop-blur-[10px] fixed top-0 z-[100000] flex justify-center items-center px-[20px] " >
            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  zIndex: 1500,
                },
              }}
            />
            <div className="w-[400px] p-[20px] bg-[#2a2a2adf] text-white min-h-[180px] h-fit rounded-[20px] shadow-md" >
              <div className=" w-full flex justify-end cursor-pointer">
                <X onClick={() => { setLockClicked(!lockClicked); setPassword("") }} />
              </div>

              <div className="h-fit mt-[10px]">
                <form onSubmit={checkPassword} action="" className={`w-[100%] m-auto flex flex-col justify-center ${koulen.className}`}>
                  <label htmlFor="" className="text-[17px] tracking-[1px] mb-[5px]">
                    Enter your password to get Early Access!
                  </label>
                  <div className="flex flex-col gap-[20px] pb-[20px]">
                    <div className="flex flex-col gap-[10px]">
                      <input
                        required
                        hidden={false}
                        className="pass-input placeholder:text-white max-sm:placeholder:text-[15px] max-sm:h-[50px] tracking-[1px] w-full"
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {
                        passwordVisible ?
                          <div className="flex gap-[10px] text-[16px] cursor-pointer" onClick={() => setPasswordVisible(!passwordVisible)} >
                            <EyeClosed />
                            Hide password
                          </div>
                          :
                          <div className="flex gap-[10px] text-[16px] cursor-pointer" onClick={() => setPasswordVisible(!passwordVisible)} >
                            <Eye />
                            Show password
                          </div>
                      }
                    </div>

                    <button
                      className={`bg-[#FFFDFD] text-black w-[100%] h-[65px] font-semibold text-[20px] max-sm:h-[50px] max-sm:text-[18px] tracking-[1px] ${loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      type="submit"
                    >
                      Unlock
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          :
          null
      }

      <div className="w-screen h-fit min-h-screen pt-[50px] md:pt-[0px] pb-[20px] lockup-bg flex flex-col items-center justify-start relative">
        <div className="flex flex-col items-center justify-center w-[90%]">
          <div className="flex items-center justify-between w-[90%] max-sm:mb-[20px]">
            <Image
              className="w-[20%] h-auto max-sm:w-[60%]"
              src={AstraLogo}
              alt="astralogo"
            />
            <div onClick={() => setLockClicked(!lockClicked)} className="bg-[#545454]/50 p-[10px] shadow-md rounded-full cursor-pointer">
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
              className={`bg-[#FFFDFD] text-black w-[90%] h-[65px] font-semibold text-[20px] max-sm:h-[50px] max-sm:text-[18px] tracking-[1px] ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              type="submit"
              disabled={loading}
            >
              NOTIFY ME
            </button>
          </form>
          <div className="flex flex-col gap-[30px] items-center">
            <p className="text-white underline cursor-pointer max-sm:text-[12px] mt-[10px]  ">
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
      </div>
    </>
  );
}
