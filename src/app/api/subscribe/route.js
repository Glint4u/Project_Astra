import { NextResponse } from "next/server";
import { google } from "googleapis";
import getGoogleAuth from "../../utils/auth";



export async function POST(req, res) {
    const { email } = await req.json();
    if (!email) {
        return NextResponse.json(
            { error: "All fields are required" },
            { status: 400 }
        );
    }
    try {
        const auth = getGoogleAuth();
        const sheets = google.sheets({ version: "v4", auth });
        const spreadsheetId = process.env.SPREADSHEET_ID;
        const range = "NewsLetter_Response!A:C";

        const timestamp = new Date().toUTCString();

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[timestamp, email]],
            },
        });

        return NextResponse.json(
            { message: "Thanks for subscribing!" },
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
