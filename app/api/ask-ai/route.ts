import { HfInference } from "@huggingface/inference";
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
    const client = new HfInference(process.env.HF_ACCESS_TOKEN);
    const model = "microsoft/Phi-3-mini-4k-instruct";
    let out = "";

    const stream = client.chatCompletionStream({
      model,
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
      max_tokens: 500,
    });

    for await (const chunk of stream) {
      if (chunk.choices && chunk.choices.length > 0) {
        const newContent = chunk.choices[0].delta.content;
        out += newContent;
      }
    }
    return NextResponse.json({ answer: out }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Failed HF API call" },
      { status: 500 }
    );
  }
}
