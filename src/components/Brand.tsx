export default function Brand({ light = false }: { light?: boolean }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={`brand-logo-full ${light ? "brand-logo-light" : ""}`} src="/brand/sawely-logo.png" width="600" height="400" alt="Sawely - مساعد واتساب للأعمال" fetchPriority="high" />;
}
