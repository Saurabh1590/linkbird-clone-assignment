import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { fullName, email, password } = await request.json();

    // Basic validation
    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newUser = await db
      .insert(users)
      .values({
        fullName,
        email,
      })
      .returning(); // .returning() sends back the user data that was inserted

    return NextResponse.json({ user: newUser[0] }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);

    // This is the type-safe way to check for a specific database error
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code: unknown }).code === "23505"
    ) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 409 }
      );
    }

    // For all other errors, send a generic response
    return NextResponse.json(
      { error: "An internal error occurred" },
      { status: 500 }
    );
  }
}
