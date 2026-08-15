import { CalendarCheck, Send } from "lucide-react";

const questions = ["الأسعار", "المواعيد", "الموقع"];

export default function LiveDemo({ compact = false }: { compact?: boolean }) {
  return <>
    <div className={`live-demo ${compact ? "compact" : ""}`} data-live-demo aria-label="تجربة محادثة Sawely التفاعلية">
      <div className="demo-head"><span className="demo-avatar">S</span><div><b>Sawely</b><small><i /> متصل الآن</small></div><span className="secure"><CalendarCheck /> حجز آمن</span></div>
      <div className="demo-chat" data-chat><div className="chat-message bot">أهلاً وسهلاً 👋 كيف أقدر أخدمك اليوم؟<time>الآن</time></div></div>
      <div className="quick-questions">{questions.map(question => <button key={question} type="button" data-question={question}>اسأل عن {question}</button>)}</div>
      <div className="demo-input"><span>اكتب رسالتك...</span><Send /></div>
    </div>
    {!compact && <script dangerouslySetInnerHTML={{ __html: `(function(){const answers={'الأسعار':'أكيد! تبدأ الخدمات من 15 د.ك. أي خدمة تود حجزها؟','المواعيد':'متاح اليوم الساعة 5:00 أو 7:30 مساءً. أيهما يناسبك؟','الموقع':'نحن في الكويت، وسأرسل لك رابط الموقع فور تأكيد الموعد.'};document.querySelectorAll('[data-live-demo]').forEach(function(demo){demo.querySelectorAll('[data-question]').forEach(function(button){button.addEventListener('click',function(){const chat=demo.querySelector('[data-chat]');const q=button.dataset.question;chat.innerHTML='<div class="chat-message bot">أهلاً وسهلاً 👋 كيف أقدر أخدمك اليوم؟<time>الآن</time></div><div class="chat-message user">'+q+'<time>الآن</time></div><div class="typing" aria-label="جاري الكتابة"><i></i><i></i><i></i></div>';setTimeout(function(){const typing=chat.querySelector('.typing');if(typing)typing.outerHTML='<div class="chat-message bot">'+answers[q]+'<time>الآن</time></div>'},650)})})})})()` }} />}
  </>;
}
