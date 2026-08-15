import fs from "node:fs";
import path from "node:path";

export default function Brand({ light = false }: { light?: boolean }) {
  const hasLogo = fs.existsSync(path.join(process.cwd(), "public/brand/sawely-logo.png"));
  // The supplied brand file is intentionally served unchanged in the static export.
  // eslint-disable-next-line @next/next/no-img-element
  return <span className="brand-lockup" dir="ltr">{hasLogo && <span className="brand-mark-frame"><img className="brand-logo" src="/brand/sawely-logo.png" alt="" width="96" height="96" /></span>}<span className={`brand-word ${light ? "brand-light" : ""}`}><i>S</i>AWELY</span></span>;
}
