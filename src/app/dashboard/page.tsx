import { Metadata } from "next";

export const metadata : Metadata = {
  title : "Dashboard"  //If we pass a value to title it will pick the template of definition from layout.tsx file
}

export default function BarChart() {
  return <h1>Bar Chart!</h1>;
}
