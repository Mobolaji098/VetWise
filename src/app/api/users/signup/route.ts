import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcrypt";
// import { env } from '@/env';

// Calls the connect function to establish a connection to the database.
connect(process.env.MONGO_URI)
export async function POST(request: NextRequest) {
  // Defines an asynchronous POST request handler.
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    if(username.length == 0 || email.length == 0 || password.length == 0 ){
      return NextResponse.json(
        { message: "Details Invalid", success: false },
        { status: 400 }
      );
    }    
    // Parses the request body to extract username, email, and password.

    //Checks if a user with the provided email already exists.
    const user = await User.findOne({ email });

    //If yes, returns a 400 response.
    if (user) {      
      return NextResponse.json(
        { message: "User already exists", success: false },
        { status: 400 }
      );
    } else {
      //hash password using bcryptjs.
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      // Saves the new user to the database.
      const savedUser = await newUser.save();

      return NextResponse.json(
        {
          message: "User created successfully",
          success: true,
          savedUser,
        },
        { status: 200 }
      );
    }
  } catch (error: any) {    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// export async function GET(request: NextRequest) {
//   // Defines an asynchronous POST request handler.
//   //  console.log(process.env.MONGO_URI);
//    }
