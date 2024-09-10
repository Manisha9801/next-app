// Layouts only mount the part representing the content of newly loaded page but keeps all the common elemnts untouched.
// Layouts don't remount the shared component resulting in better performance.
// Layouts preserves the states.

//Note:- If you re-name the file to layout.tsx then state enter inside the input element will be preserved on navigation

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const pathName = usePathname();
  return (
    <div>
      <div>
        <p>Enter a text and change navigation</p> <br />
        <input
          style={{ border: "2px solid black" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <br/>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      <br/>
      <br/>
      {children}
    </div>
  );
}
