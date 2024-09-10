export default function StudentTemplate({
  children,
}: {
  children: React.ReactDOM;
}) {
  return (
    <>
      <h3>Student Profiles from Template file.</h3>
      {children}
    </>
  );
}
