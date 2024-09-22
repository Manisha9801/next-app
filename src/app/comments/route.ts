import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

export async function GET() {
  return NextResponse.json(comments);  
}

export async function POST(request: NextRequest) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201   //201 reflects new resource creation.
  });
}
