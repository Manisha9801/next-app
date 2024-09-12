"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void; //excecuting reset function attempts to re-render the error boundaries contents 
}) {
  return (
    <div>
      {error.message}
      <br />
      <br />
      <button onClick={reset}>Try again</button>  //Here reset function re-renders the review ID component
    </div>
  );
}
