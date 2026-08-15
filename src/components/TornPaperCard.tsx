export default function TornPaperCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`torn-card ${className}`}>{children}</div>;
}
