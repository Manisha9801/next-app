import { NextResponse } from "next/server";

export async function GET() {
    return new NextResponse("Hello World from New API");  // we can use NextResponse as well as Response object both
}

//Here Page router and route handler are in conflict, but TypeScript gives preference to route handler
//and when we visit /hello,  route handler will get executed and we will see "Hello World from New API"
//To resolve this, we can create a api folder and move route handler inside that