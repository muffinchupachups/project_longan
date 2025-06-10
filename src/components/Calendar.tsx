import { useState } from "react";
import Calendar from "react-calendar";
import type { CalendarProps } from "react-calendar"; 
import "react-calendar/dist/Calendar.css";

type Value = CalendarProps['value'];

export default function CalendarWidget() {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-lg p-4 shadow max-w-xs">
      <h2 className="font-semibold text-[#1E3A2E] mb-2">ปฏิทิน</h2>
      <Calendar
        onChange={(v) => setValue(v)}
        value={value}
      />
    </div>
  );
}
