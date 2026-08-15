import Header from "@/components/Header";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSawely from "@/components/AboutSawely";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return <><FloatingCTA/><main><Header /><ProblemSection /><SolutionSection /><BenefitsSection /><div className="closing"><AboutSawely /><CTASection /></div></main><Footer /></>;
}
