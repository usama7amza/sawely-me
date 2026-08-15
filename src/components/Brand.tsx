export default function Brand({ light = false }: { light?: boolean }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={`brand-logo-full ${light ? "brand-logo-light" : ""}`} src="/brand/sawely-logo.png" width="1536" height="1024" alt="SAWELY" />;
}
