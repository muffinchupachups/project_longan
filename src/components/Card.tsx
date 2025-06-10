interface CardProps {
  title: string;
  value?: string;
  list?: string[];
  bg?: string;
}

export default function Card({ title, value, list, bg = "bg-white" }: CardProps) {
  return (
    <div className={`${bg} rounded-lg p-4 shadow`}>
      <h2 className="font-semibold text-[#1E3A2E] mb-2 text-center md:text-left">{title}</h2>
      {value && <p className="text-2xl font-bold text-[#1E3A2E] text-center">{value}</p>}
      {list && (
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
