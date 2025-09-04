export default function TimelineItem({ left, right, title, subtitle }) {
  return (
    <div className="grid md:grid-cols-[1fr_auto_1fr] items-start gap-4">
      <div className="text-right opacity-80">{left}</div>
      <div className="w-3 h-3 bg-pink-500 rounded-full mt-2 mx-auto"></div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="opacity-70">{subtitle}</div>
        {right && <div className="mt-1 opacity-80">{right}</div>}
      </div>
    </div>
  );
}
