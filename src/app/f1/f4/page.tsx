import Link from "next/link";

export default function f4() {
  return (
    <>
      <h1>F4 Page</h1>
      <Link href="/f1/f3">Navigate to F3</Link><br/>
      <Link href="/about">Navigate to About</Link>
    </>
  );
}
