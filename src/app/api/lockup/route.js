import { NextResponse } from "next/server";
import { google } from "googleapis";
import getGoogleAuth from "../../utils/auth";

function validateMobileNumber(mobileNumber) {
  // Define a regex pattern for a valid mobile number
  const mobilePattern = /^[+]?[1-9]\d{0,2}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{4}$/;

  // Check if the number matches the pattern
  if (mobilePattern.test(mobileNumber)) {
    return { valid: true, message: "Mobile number is valid." };
  } else {
    return { valid: false, message: "Invalid mobile number format." };
  }
}

export async function POST(req, res) {
  const { email, phoneNumber } = await req.json();
  if (!email || !phoneNumber) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }
  try {
    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const range = "Sheet1!A:C"; // Updated to include a third column for the timestamp

    // Get the current timestamp
    const timestamp = new Date().toISOString(); // ISO 8601 format
    let num = validateMobileNumber(phoneNumber)
    if(!num.valid){
      return NextResponse.json(
        { error: "In valid mobile number!" },
        { status: 400 }
      );
    }
    // Append the email, phone number, and timestamp
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, email, phoneNumber]], // Include timestamp
      },
    });

    return NextResponse.json(
      { message: "Thanks for submitting your details!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error appending data to Google Sheets:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
