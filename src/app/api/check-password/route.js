import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import AccessPassword from "../../model/accessPassword";
import connectDB from "../../config.js";

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

export async function POST(req, res) {
  const { password } = await req.json();

  // Validate password
  const { isPasswordOk, message } = passwordValidator(password);
  if (!isPasswordOk) {
    return NextResponse.json(
      { error: message },
      { status: 400 }
    );
  }

  try {
    // Connect to the database
    await connectDB();

    // Retrieve the hashed password from the database
    const storedPasswordRecord = await AccessPassword.findOne({});
    if (!storedPasswordRecord) {
      return NextResponse.json(
        { error: "No password set. Please set a password first." },
        { status: 404 }
      );
    }

    // Compare the plain-text password with the hashed password
    const isMatch = await bcrypt.compare(password, storedPasswordRecord.password);
    if (isMatch) {
      return NextResponse.json(
        { message: "User Authenticated!" },
        { status: 200 }
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
