export default function Doodle({ type, className = "" }: { type: "plane" | "star" | "arrow" | "spark"; className?: string }) {
  const paths = {
    plane: <><path d="M2 11 29 2 19 29l-5-11-12-7Z"/><path d="m14 18 15-16"/></>,
    star: <path d="m16 1 3.5 10.5L30 8l-7 9 8 6-11-1-3 10-3-10-11 3 8-8-7-8 10 3 2-11Z"/>,
    arrow: <><path d="M2 3c8 2 15 8 18 20"/><path d="m14 19 6 4 3-7"/></>,
    spark: <><path d="M16 1v9M16 22v9M1 16h9M22 16h9"/><path d="m5 5 6 6M21 21l6 6M27 5l-6 6M11 21l-6 6"/></>,
  };
  return <svg className={`doodle ${className}`} viewBox="0 0 32 32" aria-hidden="true">{paths[type]}</svg>;
}
