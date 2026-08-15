export default function Brand({ light = false }: { light?: boolean }) {
  return <span className="brand-lockup" dir="ltr">
    <svg className="brand-symbol" viewBox="0 0 94 70" role="img" aria-label="رمز Sawely">
      <defs><linearGradient id="brand-gradient" x1="0" x2="1"><stop stopColor="#16b8a3"/><stop offset=".52" stopColor="#2670db"/><stop offset="1" stopColor="#5a2ac7"/></linearGradient></defs>
      <g fill="none" stroke="url(#brand-gradient)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 35h14V20v30-15h14V9v52-26h14V18v34-17h14V24v22-11h20"/></g>
      <g fill="url(#brand-gradient)"><circle cx="8" cy="35" r="7"/><circle cx="22" cy="20" r="7"/><circle cx="22" cy="50" r="7"/><circle cx="36" cy="9" r="7"/><circle cx="36" cy="61" r="7"/><circle cx="50" cy="18" r="7"/><circle cx="50" cy="52" r="7"/><circle cx="64" cy="24" r="7"/><circle cx="64" cy="46" r="7"/><circle cx="84" cy="35" r="7"/></g>
    </svg>
    <span className={`brand-word ${light ? "brand-light" : ""}`}><i>S</i>AWELY</span>
  </span>;
}
