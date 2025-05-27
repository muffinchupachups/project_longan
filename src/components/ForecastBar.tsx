// src/components/ForecastBar.tsx
const forecastMonths = [
  { month: "ม.ค.", status: "แนะนำ" },
  { month: "ก.พ.", status: "" },
  { month: "มี.ค.", status: "" },
  { month: "เม.ย.", status: "" },
  { month: "พ.ค.", status: "ไม่แนะนำ" },
  { month: "มิ.ย.", status: "" },
  { month: "ก.ค.", status: "" },
  { month: "ส.ค.", status: "" },
  { month: "ก.ย.", status: "แนะนำ" },
  { month: "ต.ค.", status: "" },
  { month: "พ.ย.", status: "เหมาะสม" },
  { month: "ธ.ค.", status: "" },
];

export default function ForecastBar() {
  return (
    <section>
      <h3 className="text-lg font-semibold text-green-800 mb-3">
        ช่วงเวลาที่เหมาะสมในการปลูก
      </h3>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x scroll-px-4 px-1">
        {forecastMonths.map((item, index) => {
          let color = "bg-gray-100 border-gray-200 text-gray-700";
          if (item.status === "แนะนำ") color = "bg-green-100 border-green-400 text-green-800";
          if (item.status === "ไม่แนะนำ") color = "bg-red-100 border-red-400 text-red-800";
          if (item.status === "เหมาะสม") color = "bg-blue-100 border-blue-400 text-blue-800";

          return (
            <div
              key={index}
              className={`min-w-[72px] snap-center text-center px-3 py-2 border rounded-xl shadow-sm ${color}`}
            >
              <div className="font-bold">{item.month}</div>
              {item.status && (
                <div className="text-xs mt-1 font-medium">{item.status}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
