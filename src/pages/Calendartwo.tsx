import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import thLocale from "@fullcalendar/core/locales/th";

export default function CalendarPage() {
  const [events, setEvents] = useState([
    { title: "🌱 ปลูกลำไย", date: "2025-06-06" },
    { title: "✂️ ตัดแต่งกิ่ง", date: "2025-06-07" },
    { title: "💧 รดน้ำต้นไม้", date: "2025-06-10" },
    { title: "🍂 ใส่ปุ๋ย", date: "2025-06-14" },
    { title: "🌱 ปลูกลำไย", date: "2025-06-15" },
    { title: "💧 รดน้ำต้นไม้", date: "2025-06-23" },
    { title: "✂️ ตัดแต่งกิ่ง", date: "2025-06-25" },
    { title: "🍂 ใส่ปุ๋ย", date: "2025-06-27" },
    { title: "💧 รดน้ำต้นไม้ ✂️ ตัดแต่งกิ่ง", date: "2025-06-28" }
  ]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [newEventTitle, setNewEventTitle] = useState("");

  const handleDateClick = (arg: any) => {
    setSelectedDate(arg.dateStr);
  };

  const handleAddEvent = () => {
    if (selectedDate && newEventTitle.trim()) {
      setEvents([...events, { title: newEventTitle, date: selectedDate }]);
    }
    setSelectedDate(null);
    setNewEventTitle("");
  };

  return (
    <div className="p-6 bg-[#f0fdfb] min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-teal-700 flex items-center">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z"/>
        </svg>
        ปฏิทินกิจกรรมเกษตร
      </h2>
      <div className="mb-2 text-right">
        <button className="px-4 py-1 text-sm rounded bg-[#b2e1d9] text-teal-700 mr-2">Month</button>
        <button className="px-4 py-1 text-sm rounded hover:bg-gray-200">Week</button>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={thLocale}
        events={events}
        dateClick={handleDateClick}
        height="auto"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: ""
        }}
        dayCellClassNames={() => "border-none bg-transparent text-center py-2"}
        dayCellContent={(arg) => {
          const dateStr = arg.date.toISOString().split('T')[0];
          const dayEvents = events.filter(e => e.date === dateStr);
          const isMultiActivities = dayEvents.length > 1;

          return (
            <div className="flex flex-col items-center justify-center space-y-1">
              <span>{arg.dayNumberText}</span>
              {dayEvents.slice(0, 2).map((event, index) => (
                <span key={index} className="text-sm">{event.title}</span>
              ))}
              {isMultiActivities && (
                <span className="text-xs text-gray-500">{dayEvents.length} activities</span>
              )}
            </div>
          );
        }}
      />

      {/* Modal เพิ่มกิจกรรม */}
      {selectedDate && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-semibold text-teal-700 mb-2">เพิ่มกิจกรรมในวันที่ {selectedDate}</h3>
            <input
              type="text"
              placeholder="เช่น 🌱 ปลูกลำไย"
              className="w-full border rounded px-4 py-2 mb-4"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedDate(null)}
                className="px-4 py-1 rounded bg-gray-200 hover:bg-gray-300"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleAddEvent}
                className="px-4 py-1 rounded bg-teal-600 text-white hover:bg-teal-700"
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
