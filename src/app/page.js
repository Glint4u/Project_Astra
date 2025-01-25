"use client";
import { useContext, useEffect } from "react";
import HomePage from "@/components/Home";
import LockUp from "@/components/LockUp";
import { AuthContext } from "@/context/authContext";
import Loading from "@/components/Loading";

export default function Home() {
  const { isAuthenticated, loading, productIds, setProductIds, addProductsToLocal } = useContext(AuthContext);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : !isAuthenticated ? (
        <div className="fixed overflow-hidden top-0">
          <LockUp />
        </div>
      ) : (
        <div>
          <HomePage productIds={productIds} setProductIds={setProductIds} addProductsToLocal={addProductsToLocal} />
        </div>
      )}
    </div>
  );
}
