import { Bot } from "lucide-react";
import TornPaperCard from "./TornPaperCard";
export default function AboutSawely() {
  return <section id="about" className="about container reveal"><TornPaperCard className="about-note"><span className="tape"/><div className="bot-doodle"><Bot/></div><div><h2>عن Sawely</h2><p><b dir="ltr">Sawely</b> سوت حل لمشكلة حقيقية: أصحاب الأعمال الصغيرة يضيعون وقت وعملاء بسبب الرد المتأخر على الواتساب.</p><p>سوت حل <strong>بسيط وعملي</strong> يحل المشكلة فعلاً، مو مجرد فكرة على الورق.</p></div></TornPaperCard></section>;
}
