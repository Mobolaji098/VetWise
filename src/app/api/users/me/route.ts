// src/app/api/users/me/route.ts
import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/middleware/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect(process.env.MONGO_URI);

export async function GET(request: NextRequest) {
  try {
    // Extract user ID from the authentication token

    const userId = await getDataFromToken(request);
    console.log(userId);
    if (userId == null) {
      return NextResponse.json({
        message: "No User found",
        data: {},
      });
    }
    // Find the user in the database based on the user ID
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
