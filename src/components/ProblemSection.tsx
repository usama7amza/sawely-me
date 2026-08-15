import PaperSection from "./PaperSection";
import WhatsAppChatMockup from "./WhatsAppChatMockup";

const messages = [
  { text: <>السلام عليكم<br/>أبي احجز موعد غداً</>, time: "10:30 PM", side: "in" as const },
  { text: "لو سمحت، متى يتوفر موعد؟", time: "10:45 PM", side: "out" as const },
  { text: "تمام، بانتظار ردكم", time: "11:15 PM", side: "in" as const },
  { text: "💔 تم الحجز في مكان آخر", time: "11:30 PM", side: "in" as const, state: "lost" as const },
];
export default function ProblemSection() {
  return <div className="container"><PaperSection id="problem" title="المشكلة" tone="red" className="story problem"><WhatsAppChatMockup messages={messages} label="محادثة توضح ضياع الحجز بسبب تأخر الرد"/><div className="story-copy"><p>عملاؤك يراسلونك على واتساب...<br/>وأنت أو فريقك مشغولين ومضغوطين،<br/><strong>والرد يتأخر، والحجز يضيع</strong></p><span className="sad" aria-hidden="true">☹</span></div></PaperSection></div>;
}
