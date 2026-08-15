import { MoreVertical, Phone, Video } from "lucide-react";

type Message = { text: React.ReactNode; time: string; side: "in" | "out"; state?: "lost" | "success"; delivery?: "sent" | "read" };
export default function WhatsAppChatMockup({ messages, sawely = false, offline = false, noReply = false, label }: { messages: Message[]; sawely?: boolean; offline?: boolean; noReply?: boolean; label: string }) {
  return <div className="phone" dir="rtl" role="img" aria-label={label}>
    <div className="chat-head"><span className={`avatar ${sawely ? "ai" : ""}`}>{sawely ? "✣" : ""}</span><span className="chat-name">{sawely ? "Sawely" : "Business"}<small className={offline ? "offline" : ""}>{offline ? "غير متصل" : "متصل الآن"}</small></span><span className="chat-actions"><Video/><Phone/><MoreVertical/></span></div>
    <div className="chat-body">{messages.map((m, i) => <div key={i} className={`bubble ${m.side} ${m.state ?? ""}`}><span>{m.text}</span><time dir="ltr">{m.time}</time>{m.side === "out" && <b className={m.delivery === "read" ? "read" : "sent"}>✓{m.delivery === "read" ? "✓" : ""}</b>}</div>)}{noReply && <div className="no-reply">لا يوجد رد من النشاط</div>}</div>
  </div>;
}
