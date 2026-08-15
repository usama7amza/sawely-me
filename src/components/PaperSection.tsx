import { CircleCheckBig, TriangleAlert } from "lucide-react";

export default function PaperSection({ id, title, tone = "purple", children, className = "" }: { id: string; title: string; tone?: "purple" | "red" | "green"; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`paper-section reveal ${className}`}>
    <h2 className={`tape-title ${tone}`}>{title}{tone === "red" && <TriangleAlert aria-hidden="true"/>}{tone === "green" && <CircleCheckBig aria-hidden="true"/>}</h2>
    {children}
  </section>;
}
