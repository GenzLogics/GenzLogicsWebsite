import { Service } from "@/src/data/services";

type ServicesListProps = {
  items: Service[];
};

export default function ServicesList({ items }: ServicesListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md animate-pop-in">
          <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
          <p className="mt-4 text-slate-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
