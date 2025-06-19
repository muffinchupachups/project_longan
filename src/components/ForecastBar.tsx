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
    <section className="px-4 py-3">
      <h3 className="text-lg font-semibold text-green-800 mb-3">
        ช่วงเวลาที่เหมาะสมในการปลูก
      </h3>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x scroll-smooth">
        {forecastMonths.map((item, index) => {
          let color =
            "bg-white text-gray-700 border-gray-200";
          if (item.status === "แนะนำ") {
            color = "bg-green-100 border-green-400 text-green-800";
          } else if (item.status === "ไม่แนะนำ") {
            color = "bg-red-100 border-red-400 text-red-800";
          } else if (item.status === "เหมาะสม") {
            color = "bg-blue-100 border-blue-400 text-blue-800";
          }

          return (
            <div
              key={index}
              className={`min-w-[100px] snap-center text-center px-5 py-3 border-2 rounded-xl shadow-sm ${color} hover:shadow-lg hover:border-gray-500 transition-all duration-300`}
            >
              <div className="font-bold text-lg">{item.month}</div>
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
