import Badge from "./ui/Badge";
export default function Section({ id, icon, title, hint, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="flex items-center gap-2 mb-6">
          {icon}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          {hint && <Badge variant="secondary" className="ml-1">{hint}</Badge>}
        </div>
        {children}
      </div>
    </section>
  );
}