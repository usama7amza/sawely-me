import Brand from "./Brand";
import Doodle from "./Doodle";

export default function Header() {
  return <header className="hero container">
    <Doodle type="star" className="hero-star" /><Doodle type="plane" className="hero-plane" />
    <div className="hero-badge">حجز ذكي<br/>عملاء سعداء</div>
    <Brand />
    <p>ذكاء اصطناعي لحجوزات الواتساب</p>
    <span className="scribble" aria-hidden="true" />
  </header>;
}
