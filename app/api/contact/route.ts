import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, goal, message } = body;

    if (!name || !phone || !email || !goal || !message) {
      return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase.from("inquiries").insert({
      name,
      phone,
      email,
      goal,
      message
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong. Check your Supabase keys and table setup."
      },
      { status: 500 }
    );
  }
}
