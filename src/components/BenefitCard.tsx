import type { LucideIcon } from "lucide-react";
export default function BenefitCard({ title, description, Icon }: { title: string; description: string; Icon: LucideIcon }) {
  return <article className="benefit"><span className="benefit-icon"><Icon aria-hidden="true"/></span><h3>{title}</h3><p>{description}</p></article>;
}
