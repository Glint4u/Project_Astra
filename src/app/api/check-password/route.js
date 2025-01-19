import { NextResponse } from "next/server";
import { encrypter, decrypter } from "@/app/utils/encrypter_decrypter";
import bcrypt from "bcrypt";
import AccessPassword from "../../model/accessPassword";
import connectDB from "../../config.js";

const storeToCookies = (value) => {
  const cookieName = encrypter("isAuthenticated");
  const cookieValue = encrypter(value);
  const maxAge = 60 * 60 * 24; 

  return new NextResponse(null, {
    headers: {
      "Set-Cookie": `${cookieName}=${cookieValue}; Path=/; HttpOnly; Secure; Max-Age=${maxAge}`,
    },
  });
};


function passwordValidator(password) {
  let isPasswordOk = true;
  if (password.length > 20) {
    return {
      isPasswordOk: !isPasswordOk,
      message: "Password should be maximum 20 characters long.",
    };
  }
  if (password.length < 5) {
    return {
      isPasswordOk: !isPasswordOk,
      message: "Password should be minimum 5 characters long.",
    };
  }
  return { isPasswordOk };
}

export async function POST(req) {
  const { password } = await req.json();

  const { isPasswordOk, message } = passwordValidator(password);
  if (!isPasswordOk) {
    return NextResponse.json({ error: message }, { status: 400 });
  }

  try {
    await connectDB();

    const storedPasswordRecord = await AccessPassword.findOne({});
    if (!storedPasswordRecord) {
      return NextResponse.json(
        { error: "No password set. Please set a password first." },
        { status: 404 }
      );
    }

    const isMatch = await bcrypt.compare(password, storedPasswordRecord.password);
    if (isMatch) {
      const cookieResponse = storeToCookies("true");
      return NextResponse.json(
        { message: "User Authenticated!" },
        { status: 200, headers: cookieResponse.headers }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid password!" },
        { status: 403 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}

