"use client"
import React, {useEffect, useContext} from "react";
import { AuthContext } from "@/context/authContext";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Loading from "@/components/Loading";

export default function page() {
   const { isAuthenticated, setAuthenticated, isOpen, setOpen } = useContext(AuthContext)
      useEffect(() => {
        if(!isOpen){
          window.location.href = "/"
        }
      }, [])
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