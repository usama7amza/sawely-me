import { benefits } from "@/data/benefits";
import BenefitCard from "./BenefitCard";
import PaperSection from "./PaperSection";
export default function BenefitsSection() {
  return <div className="container"><PaperSection id="benefits" title="ليش Sawely؟" className="benefits"><div className="benefit-grid">{benefits.map(({ icon, ...item }) => <BenefitCard key={item.title} {...item} Icon={icon}/>)}</div></PaperSection></div>;
}
