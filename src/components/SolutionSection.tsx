import PaperSection from "./PaperSection";
import WhatsAppChatMockup from "./WhatsAppChatMockup";

const messages = [
  { text: <>السلام عليكم<br/>أبي احجز موعد غداً</>, time: "10:30 AM", side: "in" as const },
  { text: <>أهلاً وسهلاً 😊<br/>أكيد، أي خدمة تحبها؟</>, time: "10:30 AM", side: "out" as const },
  { text: <>✅ تم حجز موعدك بنجاح<br/>السبت 11 مايو - 5:00 م</>, time: "10:31 AM", side: "out" as const, state: "success" as const },
];
export default function SolutionSection() {
  return <div className="container"><PaperSection id="solution" title="الحل" tone="green" className="story solution"><WhatsAppChatMockup sawely messages={messages} label="محادثة توضح رد Sawely الفوري ونجاح الحجز"/><div className="story-copy"><p>ما يفوتك عميل بعد اليوم —<br/><b dir="ltr">Sawely</b> <strong>يرد ويحجز في الحال،</strong><br/>دايم موجود على مدار الساعة</p><span className="always" dir="ltr">24/7</span></div></PaperSection></div>;
}
