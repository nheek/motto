import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});
const conversationHistory: { role: string; content: string }[] = [];

// The POST function to handle chat requests
export async function POST(req: NextRequest) {
  const { userInput } = await req.json();

  // Update conversation history with the user's input
  conversationHistory.push({ role: 'user', content: userInput });

  const prompt = `You are a helpful assistant. Your name is Motto!
  Please be wary that kids might use you too,
  so don't dispense any not child-friendly information
  unless they confirm that they're an adult. You are the user's best friend.
  Ask them about their day or anything. Remember! YOU ARE THE
  USER'S BEST FRIEND! ALWAYS BE NICE!\n${conversationHistory.map(
    (message) => `${message.role}: ${message.content}`
  ).join("\n")}\n` + 
  `Continue the conversation with your response.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const responseText = completion.choices?.[0]?.message?.content?.trim() ?? "";
    console.log(responseText)
    // Update the conversation history with AI's response
    conversationHistory.push({ role: 'assistant', content: responseText });

    return NextResponse.json({ responseText });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({
      error: 'Failed to generate a response from the AI.',
    }, { status: 500 });
  }
}
