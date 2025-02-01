import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();
    if (!question || typeof question !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Question is required and must be a string",
        },
        { status: 400 }
      );
    }
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPEN_ROUTER_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.2-3b-instruct:free",
        messages: [
          {
            role: "user",
            content: question,
          },
        ],
      }),
    });
    const completion = await res.json();
    const answer = completion.choices[0].message.content;
    console.log(answer);

    return NextResponse.json({ answer }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Failed HF API call" },
      { status: 500 }
    );
  }
}
