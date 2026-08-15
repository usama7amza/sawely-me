import PaperSection from "./PaperSection";
import WhatsAppChatMockup from "./WhatsAppChatMockup";
import WhatsAppDoodle from "./WhatsAppDoodle";

const messages = [
  { text: <>السلام عليكم<br/>أبي احجز موعد غداً</>, time: "10:30 PM", side: "out" as const, delivery: "sent" as const },
  { text: "لو سمحت، متى يتوفر موعد؟", time: "10:45 PM", side: "out" as const, delivery: "sent" as const },
  { text: "ما وصلني رد، الموعد متوفر؟", time: "11:15 PM", side: "out" as const, delivery: "sent" as const },
  { text: "💔 تم الحجز في مكان آخر", time: "11:30 PM", side: "out" as const, state: "lost" as const, delivery: "sent" as const },
];
export default function ProblemSection() {
  return <div className="container story-wrap problem-wrap"><WhatsAppDoodle className="problem-wa"/><span className="side-rays" aria-hidden="true"/><PaperSection id="problem" title="المشكلة" tone="red" className="story problem"><WhatsAppChatMockup offline noReply messages={messages} label="محادثة بلا رد توضح ضياع الحجز"/><div className="story-copy"><p>عملاؤك يراسلونك على واتساب...<br/>وأنت أو فريقك مشغولين ومضغوطين،<br/><strong>والرد يتأخر، والحجز يضيع</strong></p><span className="hand-line red-line" aria-hidden="true"/><span className="sad" aria-hidden="true">☹</span></div></PaperSection></div>;
}
