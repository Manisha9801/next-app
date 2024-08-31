//In this layout children is replaced by LoginPage and registerPage, But it will not be shared with forgot password page.

import React from "react";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Inner Layout shared in between login and register page</h2>
      {children}
    </>
  );
}
