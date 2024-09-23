export const dynamic = 'force-dynamic';  //handler is executed for each user request that is stop caching


import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        time: new Date().toLocaleTimeString()
    })
}