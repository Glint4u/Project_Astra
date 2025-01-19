import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { encrypter, decrypter } from "@/app/utils/encrypter_decrypter";

const getFromCookies = async () => {
    try {
        const cookieStore = await cookies();
        const res = cookieStore.get(encrypter("isAuthenticated"));

        if (res) {
            const final_res = decrypter(res.value);
            return final_res;
        }
        return "false"; 
    } catch (error) {
        // console.error("Error retrieving or decrypting cookie:", error.message);
        return "false";
    }
};

export async function GET(req) {
    const isAuthenticated = await getFromCookies();
    
    if (isAuthenticated === "true") {
      return NextResponse.json(
        { message: "User Authenticated!", isAuthenticated: true },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "User not authenticated!", isAuthenticated: false },
        { status: 403 }
      );
    }
  }
  