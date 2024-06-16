import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromToken = (request: NextRequest) => {
  try {
    // Retrieve the token from the cookies
    const token = request.cookies.get("token")?.value || "";
    if (token == "") return null;
    else {
      // Verify and decode the token using the secret key
      const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);

      // Return the user ID from the decoded token
      return decodedToken.id;
    }
  } catch (error: any) {
    console.log(error);

    throw new Error(error.message);
  }
};
