import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import thLocale from "@fullcalendar/core/locales/th";
import { useNavigate, } from "react-router-dom";


// mock data: กิจกรรมปลูกลำไย
const events = [
  { title: "🌱 ปลูกลำไย", date: "2025-01-06" },
  { title: "✂️ ตัดแต่งกิ่ง", date: "2025-02-10" },
  { title: "🍂 ใส่ปุ๋ย", date: "2025-03-14" },
  { title: "💧 รดน้ำต้นไม้", date: "2025-05-20" },
  { title: "🌱 ปลูกลำไย", date: "2025-06-06" },
  { title: "✂️ ตัดแต่งกิ่ง", date: "2025-07-25" },
  { title: "🍂 ใส่ปุ๋ย", date: "2025-08-14" },
  { title: "💧 รดน้ำต้นไม้", date: "2025-09-10" },
  { title: "🌾 เก็บเกี่ยวลำไย", date: "2025-10-05" },
];

export default function Calendartwo() {
  const [year, setYear] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const navigate = useNavigate();

  // ฟังก์ชัน render ปฏิทินแต่ละเดือน (mini)
  const renderMonth = (month: number) => {
    const startDate = new Date(year, month, 1);

    return (
      <div
        key={month}
        className="bg-white shadow rounded-lg p-2 cursor-pointer hover:shadow-md transition"
        onClick={() => setSelectedMonth(month)}
      >
        <FullCalendar
          key={`${year}-${month}`}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          locale={thLocale}
          initialDate={startDate}
          headerToolbar={{
            left: "",
            center: "title",
            right: "",
          }}
          events={events}
          height="auto"
          contentHeight={150}
          aspectRatio={1.1}
          eventDisplay="none" 
          dayCellContent={(arg) => {
            const dateStr = arg.date.toISOString().split("T")[0];
            const dayEvents = events.filter((e) => e.date === dateStr);

            return (
              <div className="flex flex-col items-start">
                {/* วันที่ */}
                <span className="text-[10px] font-medium">
                  {arg.dayNumberText}
                </span>

                {/* แสดงกิจกรรม */}
                {dayEvents.map((event, idx) => {
                  let title = event.title;
                  if (title.includes("ตัดแต่งกิ่ง")) {
                    title = "ตัดแต่งกิ่ง";
                  }
                  return (
                    <span
                      key={idx}
                      className="text-[9px] text-green-700 whitespace-nowrap truncate"
                    >
                      {title}
                    </span>
                  );
                })}
              </div>
            );
          }}
        />
      </div>
    );
  };

  return (
    <div className="p-6 bg-[#f0fdfb] min-h-screen">
      {/* Header + Year Selector */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-teal-700">
          📅 ปฏิทินกิจกรรมลำไย ({year})
        </h2>

        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="border rounded px-3 py-1 text-teal-700"
        >
          <option value={2024}>ปี 2567 (2024)</option>
          <option value={2025}>ปี 2568 (2025)</option>
          <option value={2026}>ปี 2569 (2026)</option>
        </select>
      </div>

      {/* Grid แสดง 12 เดือนเล็ก */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }, (_, i) => renderMonth(i))}
      </div>

      {/* Popup แสดงปฏิทินเดือนใหญ่ */}
      {selectedMonth !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-teal-700">
                ปฏิทินเดือน {selectedMonth + 1} / {year}
              </h3>
              <button
                onClick={() => setSelectedMonth(null)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                ปิด
              </button>
            </div>
            {/* ✅ ปุ่มคำนวณปุ๋ย เฉพาะเดือนที่มี event "ใส่ปุ๋ย" */}
            {events.some(
              (e) =>
                e.title.includes("ใส่ปุ๋ย") &&
                new Date(e.date).getMonth() === selectedMonth
            ) && (
              <div className="mb-4">
                
                <button
                  onClick={() =>navigate("/fertilizer")}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  🧮 ทดลองคำนวณปุ๋ย
                </button>
              </div>
            )}

            <FullCalendar
              key={`popup-${year}-${selectedMonth}`}
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              locale={thLocale}
              initialDate={new Date(year, selectedMonth ?? 0, 1)}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
              }}
              buttonText={{
                prev: "◀",
                next: "▶",
                today: "วันนี้",
              }}
              events={events}
              height="auto"
              contentHeight={500}
              eventDisplay="none"
              dayCellContent={(arg) => {
                const dateStr = arg.date.toISOString().split("T")[0];
                const dayEvents = events.filter((e) => e.date === dateStr);

                return (
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold">
                      {arg.dayNumberText}
                    </span>
                    {dayEvents.map((event, idx) => {
                      let title = event.title;
                      if (title.includes("ตัดแต่งกิ่ง")) {
                        title = "ตัดแต่งกิ่ง";
                      }
                      return (
                        <span
                          key={idx}
                          className="text-xs text-green-700 whitespace-nowrap truncate"
                        >
                          {title}
                        </span>
                      );
                    })}
                  </div>
                );
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
