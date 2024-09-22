import { NextRequest, NextResponse } from "next/server";
import { comments } from "../data";

export async function GET(
  _request: NextRequest, //Pre-fix it with underscore since we are not using request parameter.
  { params }: { params: { id: string } }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return NextResponse.json(comment);
}
