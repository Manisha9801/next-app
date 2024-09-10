export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Student Prodfiles rendering from Layout</h2>
      <div>{children}</div>
    </>
  );
}
