"use client"
import React, {useEffect, useContext} from "react";
import { AuthContext } from "@/context/authContext";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Loading from "@/components/Loading";

export default function page() {
   const { isAuthenticated, setAuthenticated, isOpen, setOpen, loading, setLoading } = useContext(AuthContext)
      useEffect(() => {
          if (!isOpen && !loading) {
            window.location.href = "/"
          }
        }, [loading])
      return (
        <div>
          {
            isOpen ?
              <PrivacyPolicy />
              :
              <div>
                <Loading />
              </div>
          }
        </div>
      )
}