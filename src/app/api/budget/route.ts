import { MOCKED_BUDGET } from "@/constants/mocks";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  try {
    return NextResponse.json(MOCKED_BUDGET, { status: 200 });
  } catch (error) {
    console.error("Error fetching budget data:", error);
    return NextResponse.json(
      { message: "Could not fetch budget data" },
      { status: 500 },
    );
  }
}
