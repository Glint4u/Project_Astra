"use client"
import React, { useEffect, useContext } from "react";
import { AuthContext } from "@/context/authContext";
import Loading from "@/components/Loading";
import ShippingAndRefund from "@/components/ShippingAndRefund";

export default function page() {
  const { isAuthenticated, setAuthenticated, isOpen, setOpen, loading } = useContext(AuthContext)

  useEffect(() => {
    if (!isOpen && !loading) {
      window.location.href = "/"
    }
  }, [loading])
  return (
    <div>
      {
        loading ?
          <Loading />
          :
          isOpen ?
            <ShippingAndRefund />
            :
            <div>
              <Loading />
            </div>
      }
    </div>
  )
}