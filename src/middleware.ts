//Scenario :- Navigating to '/profile' should redirect user to the home page

import { NextResponse, NextRequest } from "next/server";

// export function middleware(request: NextRequest) {  //Function name should me middleware
//   //Approach 1 - Custome Matcher Config
//   // return NextResponse.redirect(new URL("/", request.url))
//   //Approach 2 - Conditional Statements
//   if (request.nextUrl.pathname === "/profile") {
//     // return NextResponse.redirect(new URL("/dashboard", request.url));
//     return NextResponse.rewrite(new URL("/dashboard", request.url));
//   }
// }

// export const config = {
//     matcher : "/profile"
// }


//Modifying middlewares to handle user preferences for themes and add a custom header for all responses.
export function middleware(request : NextRequest){
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if(!themePreference){
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value")
  return response;
}
