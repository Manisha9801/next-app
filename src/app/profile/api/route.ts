import { NextRequest, NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

//Two ways of reading header's
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  cookies().set("resultsPerPage", "20"); //directly setting up the cookie in the response header

  const theme = request.cookies.get("theme");

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log("theme", theme);
  console.log("theme", cookies().get("resultsPerPage"));

  return new NextResponse("<h1>Profile api call</h1>", {
    headers: {
      "content-type": "text/html",
      "set-cookie": "theme=dark",
    },
  });
}
