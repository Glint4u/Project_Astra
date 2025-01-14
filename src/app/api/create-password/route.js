import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import AccessPassword from "../../model/accessPassword";
import connectDB from "../../config.js";

function passwordValidator(password) {
  let isPasswordOk = true;
  if (password.length > 20) {
    return {
      isPasswordOk: false,
      message: "Password should be maximum 20 characters long.",
    };
  }
  if (password.length < 5) {
    return {
      isPasswordOk: false,
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

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update the existing password or create a new entry with the hashed password
    const updatedPassword = await AccessPassword.findOneAndUpdate(
      {}, // Match any document (assuming only one exists)
      { password: hashedPassword }, // Update with the hashed password
      { new: true, upsert: true, runValidators: true } // Return the updated document and create if none exists
    );

    return NextResponse.json(
      {
        message: "Password saved/updated successfully!",
        // It's generally not recommended to return the password, even if hashed
        // password: updatedPassword.password,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
