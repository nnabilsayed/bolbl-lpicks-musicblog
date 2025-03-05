import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // In a real application, you would:
    // 1. Validate the credentials against your database
    // 2. Generate a JWT or session token
    // 3. Return the token to the client

    // This is a mock implementation
    if (email === "user@example.com" && password === "password") {
      return NextResponse.json({
        success: true,
        message: "Login successful",
        token: "mock-jwt-token",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
