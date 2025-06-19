import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import thLocale from "@fullcalendar/core/locales/th";

export default function CalendarPage() {
  const [events, setEvents] = useState([
    { title: "🌱 ปลูกลำไย", date: "2025-06-06" },
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
      <h2 className="text-2xl font-semibold mb-4 text-teal-700">ปฏิทินกิจกรรมเกษตร</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={thLocale}
        events={events}
        dateClick={handleDateClick}
        height="auto"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek"
        }}
        editable={true}
        selectable={true}
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
