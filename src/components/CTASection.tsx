import { MessageCircle, MonitorPlay } from "lucide-react";
import { DEMO_URL, WHATSAPP_URL } from "@/config/site";
export default function CTASection() {
  return <section id="try" className="cta reveal"><div className="container"><h2>جاهز تجربه؟</h2><p>شوف بنفسك شلون Sawely يحوّل المحادثة إلى حجز.</p><div className="cta-buttons"><a className="button demo" href={DEMO_URL} target="_blank" rel="noopener noreferrer"><MonitorPlay/>جرب الديمو الحين</a><a className="button whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle/>كلمنا على واتساب</a></div></div></section>;
}
