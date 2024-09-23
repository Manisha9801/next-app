//Scenario :- Navigating to '/profile' should redirect user to the home page

import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {  //Function name should me middleware
  //Approach 1 - Custome Matcher Config
  // return NextResponse.redirect(new URL("/", request.url))
  //Approach 2 - Conditional Statements
  if (request.nextUrl.pathname === "/profile") {
    // return NextResponse.redirect(new URL("/dashboard", request.url));
    return NextResponse.rewrite(new URL("/dashboard", request.url));
  }
}

// export const config = {
//     matcher : "/profile"
// }
