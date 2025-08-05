import React, { useState } from "react";

export default function ServiceSetup() {
  const [status, setStatus] = useState("available");

  return (
    <div className="min-h-screen bg-[#f8faf7] p-6 font-sans">
      <h1 className="text-2xl font-bold text-green-800 mb-6">ตั้งค่าการให้บริการ</h1>

      {/* Section 1: วัน-เวลาว่างและพื้นที่ */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">📅 กำหนดวัน-เวลาและพื้นที่ให้บริการ</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="เลือกวันที่"
          />
          <input
            type="time"
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="เวลาเริ่ม"
          />
          <input
            type="time"
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="เวลาสิ้นสุด"
          />
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="พื้นที่ให้บริการ (เช่น จ.ลำพูน)"
          />
        </div>
      </div>

      {/* Section 2: ข้อมูลอุปกรณ์ */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">🛠️ ข้อมูลอุปกรณ์</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="รุ่นโดรน (เช่น MG-1)"
          />
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="ความจุ (ลิตร)"
          />
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="ความเร็วในการใส่ปุ๋ย (ไร่/ชม.)"
          />
        </div>
      </div>

      {/* Section 3: สถานะการให้บริการ */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">📡 สถานะการให้บริการ</h2>
        <div className="flex flex-wrap gap-4">
          {["available", "busy", "in_progress", "completed"].map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-4 py-2 rounded-lg font-medium ${
                status === s
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {s === "available" && "ว่างงาน"}
              {s === "busy" && "ไม่ว่าง"}
              {s === "in_progress" && "ดำเนินการ"}
              {s === "completed" && "เสร็จสิ้น"}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          ✅ สถานะปัจจุบัน:{" "}
          <span className="font-semibold text-green-700">
            {status === "available"
              ? "ว่างงาน"
              : status === "busy"
              ? "ไม่ว่าง"
              : status === "in_progress"
              ? "กำลังดำเนินการ"
              : "เสร็จสิ้น"}
          </span>
        </p>
      </div>

      {/* บันทึก */}
      <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">
        💾 บันทึกข้อมูล
      </button>
    </div>
  );
}
