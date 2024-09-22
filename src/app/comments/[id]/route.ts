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

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return NextResponse.json(comments[index]);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const deletedCommentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments[deletedCommentIndex];
  comments.splice(deletedCommentIndex, 1);
  return NextResponse.json(deletedComment);
}
