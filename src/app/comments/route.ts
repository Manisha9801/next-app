import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

export async function GET(
  request: NextRequest,
) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");        //query parameters in route handlers are often optional but they are incredible useful for implementing sort, search, pagination functionalities.
  const filteredComment = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return NextResponse.json(filteredComment);
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
    status: 201, //201 reflects new resource creation.
  });
}
