import { useState } from "react";
import { FiCalendar } from "react-icons/fi";


const activities : Record<string, string[]> = {
  "2024-06-05": ["🌱 Planting", "💧 Watering"],
  "2024-06-07": ["🧪 Fertilizing"],
  "2024-06-14": ["✂️ Pruning"],
  "2024-06-15": ["✂️ Pruning"],
  "2024-06-18": ["🌱 Planting"],
  "2024-06-21": ["🧪 Fertilizing"],
  "2024-06-25": ["✂️ Pruning"],
  "2024-06-27": ["💧 Watering"],
  "2024-06-28": ["💧 Watering"]
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarPage() {
  const [,setView] = useState("month");
  const year = 2024;
  const month = 5; // June (0-indexed)
  const date = new Date(year, month, 1);
  const startDay = date.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendar = [];
  let currentDay = 1 - startDay;

  for (let week = 0; week < 6; week++) {
    const weekRow = [];
    for (let day = 0; day < 7; day++) {
      const currentDate = new Date(year, month, currentDay);
      const key = currentDate.toISOString().split("T")[0];
      const acts = activities[key];

      weekRow.push(
        <td key={day} className="h-20 border p-2 align-top text-sm text-gray-700">
          {currentDay > 0 && currentDay <= daysInMonth ? (
            <>
              <div className="font-semibold mb-1">{currentDay}</div>
              {acts && (
                <ul className="space-y-1">
                  {acts.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              )}
            </>
          ) : null}
        </td>
      );
      currentDay++;
    }
    calendar.push(<tr key={week}>{weekRow}</tr>);
  }

  return (
    <div className="min-h-screen bg-[#F0FDFB] text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-teal-400 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white text-xl font-semibold">
          <FiCalendar /> DSS ลำไย
        </div>
        <nav className="flex gap-6 text-white font-medium">
          <a href="#">Dashboard</a>
          <a href="#">Calendar</a>
          <a href="#">Reports</a>
          <a href="#">Settings</a>
          <img src="https://i.pravatar.cc/32" alt="profile" className="rounded-full w-8 h-8" />
        </nav>
      </header>

      {/* Title and Switch View */}
      <div className="px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Farming Activity Calendar</h2>
        <div className="space-x-2">
          <button onClick={() => setView("month")} className="bg-teal-500 text-white px-4 py-1 rounded shadow">Month</button>
          <button onClick={() => setView("week")} className="bg-white border text-teal-500 px-4 py-1 rounded shadow">Week</button>
        </div>
      </div>

      {/* Legend */}
      <div className="px-6 text-sm flex gap-4 mb-2">
        <span className="flex items-center gap-1">🌱 Planting</span>
        <span className="flex items-center gap-1">✂️ Pruning</span>
        <span className="flex items-center gap-1">💧 Watering</span>
        <span className="flex items-center gap-1">🧪 Fertilizing</span>
      </div>

      {/* Calendar */}
      <div className="bg-white mx-6 rounded-xl shadow p-4 overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {daysOfWeek.map((day) => (
                <th key={day} className="py-2 text-teal-600 border-b text-left">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>{calendar}</tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-gradient-to-r from-green-500 to-teal-400 text-white text-center py-4 text-sm">
        DSS ลำไย © 2024 <br /> Smart Farming Activity Calendar for Better Yield
      </footer>
    </div>
  );
}
