export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "0 1.5rem 5rem",
      }}
    >
      {children}
    </main>
  );
}