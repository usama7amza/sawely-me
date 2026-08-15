export default function WhatsAppDoodle({ className = "" }: { className?: string }) {
  return <span className={`wa-doodle ${className}`} aria-hidden="true"><svg viewBox="0 0 64 64"><path className="wa-ring" d="M32 5a26 26 0 0 0-22 40L6 59l14-4A26 26 0 1 0 32 5Z"/><path className="wa-phone" d="M23 19c2-1 4 0 5 3l2 5c.5 2-1 3-3 4 3 6 7 9 13 11 1-2 2-4 4-3l5 3c2 1 2 3 1 5-2 4-6 6-10 5-13-3-25-15-28-28-1-4 2-8 6-9Z"/></svg></span>;
}
