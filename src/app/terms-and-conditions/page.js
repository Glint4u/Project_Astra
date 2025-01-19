"use client"
import React, { useContext, useEffect } from 'react'
import TermsAndConditions from '@/components/TermsAndConditions'
import { AuthContext } from '@/context/authContext'
import Loading from '@/components/Loading'



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
          <TermsAndConditions />
          :
          <div>
            <Loading />
          </div>
      }
    </div>
  )
}