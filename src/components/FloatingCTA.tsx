import { MessageCircle, MonitorPlay } from "lucide-react";
import { DEMO_URL, WHATSAPP_URL } from "@/config/site";

export default function FloatingCTA() {
  return <aside className="floating-cta" aria-label="روابط سريعة">
    <a className="floating-action floating-demo" href={DEMO_URL} target="_blank" rel="noopener noreferrer" aria-label="جرب الديمو الحين"><MonitorPlay/><span>جرب الديمو</span></a>
    <a className="floating-action floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="كلمنا على واتساب"><MessageCircle/><span>واتساب</span></a>
  </aside>;
}
