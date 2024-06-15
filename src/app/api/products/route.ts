import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://666d69c17a3738f7cacc4f23.mockapi.io/api/products"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error:any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
