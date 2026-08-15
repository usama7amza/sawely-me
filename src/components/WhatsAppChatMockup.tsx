import { MoreVertical, Phone, Video } from "lucide-react";

type Message = { text: React.ReactNode; time: string; side: "in" | "out"; state?: "lost" | "success" };
export default function WhatsAppChatMockup({ messages, sawely = false, label }: { messages: Message[]; sawely?: boolean; label: string }) {
  return <div className="phone" dir="rtl" role="img" aria-label={label}>
    <div className="chat-head"><span className={`avatar ${sawely ? "ai" : ""}`}>{sawely ? "✣" : ""}</span><span className="chat-name">{sawely ? "Sawely" : "Business"}<small>متصل الآن</small></span><span className="chat-actions"><Video/><Phone/><MoreVertical/></span></div>
    <div className="chat-body">{messages.map((m, i) => <div key={i} className={`bubble ${m.side} ${m.state ?? ""}`}><span>{m.text}</span><time dir="ltr">{m.time}</time>{m.side === "out" && <b>✓✓</b>}</div>)}</div>
  </div>;
}
