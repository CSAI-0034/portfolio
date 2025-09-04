export default function Section({ title, children, subtitle }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        {subtitle && <p className="opacity-70 mt-2">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
