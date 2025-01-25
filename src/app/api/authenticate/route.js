import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { encrypter, decrypter } from "@/app/utils/encrypter_decrypter";
import { parse } from "dotenv";

// const getFromCookies = async () => {
//     try {
//         const cookieStore = await cookies();
//         const res = cookieStore.get(encrypter("isAuthenticated"));
//         const date_res = cookieStore.get(encrypter("date"))

//         if(!res || !date_res){
//           return "false"
//         }

//         let current_date = new Date()
//         current_date = current_date.toUTCString().split(" ")
//         let time = current_date[4].split(":")        
//         let current_date_object = {
//           year: parseInt(current_date[3]),
//           date: parseInt(current_date[1]),
//           hours: parseInt(time[0]),
//           minute: parseInt(time[1]),
//           seconds: parseInt(time[2]),
//         }


//         const cookie_date_raw = decrypter(date_res.value)
//         const cookie_date = cookie_date_raw.split(" ")
//         const cookie_time = cookie_date[4].split(":")
//         let cookie_date_object = {
//           year: parseInt(cookie_date[3]),
//           date: parseInt(cookie_date[1]),
//           hours: parseInt(cookie_time[0]),
//           minute: parseInt(cookie_time[1]),
//           seconds: parseInt(cookie_time[2]),
//         }

//         console.log(current_date_object)
//         console.log(cookie_date_object)

//         return "false"; 
//     } catch (error) {
//         return "false";
//     }
// };

const getFromCookies = async () => {
  try {
    const cookieStore = await cookies();
    const res = cookieStore.get(encrypter("isAuthenticated"));
    const date_res = cookieStore.get(encrypter("date"));

    if (!res || !date_res) {
      return "false";
    }

    const current_date = new Date();
    const cookie_date_raw = decrypter(date_res.value);
    const cookie_date = new Date(cookie_date_raw);

    const differenceInMs = current_date - cookie_date;

    const oneDayInMs = 24 * 60 * 60 * 1000;
    if (differenceInMs > oneDayInMs) {
      cookieStore.set(encrypter("isAuthenticated"), "", { maxAge: 0 });
      cookieStore.set(encrypter("date"), "", { maxAge: 0 });

      return "false"; 
    }

    return "true";
  } catch (error) {
    console.error("Error processing cookies:", error.message);
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
