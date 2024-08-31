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
