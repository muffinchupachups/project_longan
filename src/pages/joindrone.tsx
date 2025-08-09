import React from "react";

export default function Serve() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Navbar */}
      <nav className="bg-white shadow flex items-center justify-between px-6 py-3">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-2xl">🌱</span>
            <span className="font-bold text-green-700 text-lg">ลองกันเนอร์วิส</span>
          </div>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li className="text-green-600 border-b-2 border-green-600 pb-1 cursor-pointer">แดชบอร์ด</li>
            <li className="hover:text-green-600 cursor-pointer">บัญชีงาน</li>
            <li className="hover:text-green-600 cursor-pointer">อุปกรณ์</li>
            <li className="hover:text-green-600 cursor-pointer">ราคา</li>
            <li className="hover:text-green-600 cursor-pointer">โปรไฟล์</li>
          </ul>
        </div>

        {/* Right: Notifications + Profile */}
        <div className="flex items-center gap-4">
          <button className="text-green-600 text-xl">🔔</button>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://via.placeholder.com/32"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-gray-700">สมชาย ใจดี</span>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="p-4">
        {/* Header Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatCard label="สถานะปัจจุบัน" value="พร้อมรับงาน" color="bg-green-100 text-green-700" emoji="✅" />
          <StatCard label="งานรอดำเนินการ" value="5" color="bg-blue-100 text-blue-700" emoji="📋" />
          <StatCard label="รายได้เดือนนี้" value="฿12,500" color="bg-yellow-100 text-yellow-700" emoji="💰" />
          <StatCard label="คะแนนรีวิว" value="4.8" color="bg-orange-100 text-orange-700" emoji="⭐" />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <ActionButton emoji="📅" text="เพิ่มช่วงเวลา" color="bg-green-100 text-green-700" />
          <ActionButton emoji="🔧" text="อัปเดตอุปกรณ์" color="bg-blue-100 text-blue-700" />
          <ActionButton emoji="🏷️" text="ปรับราคา" color="bg-yellow-100 text-yellow-700" />
          <ActionButton emoji="📈" text="รายงาน" color="bg-purple-100 text-purple-700" />
        </div>

        {/* Current Jobs */}
        <SectionCard title="งานปัจจุบัน">
          <JobItem
            title="จัดแปลงนา - ไร่คุณสมศักดิ์"
            location="อำเภอเมือง, จังหวัดลำปาง"
            date="วันที่ 15 มกราคม 2025, 08:00-12:00"
            price="฿2,500"
            area="5 ไร่"
            button1={{ text: "ยืนยันเวลา", color: "bg-green-500" }}
            button2={{ text: "ติดต่อผู้จ้าง", color: "bg-gray-300 text-gray-800" }}
          />
          <JobItem
            title="ตัดแต่งกิ่ง - สวนลุงคำปันทอง"
            location="อำเภอเมือง, จังหวัดลำปาง"
            date="วันที่ 16 มกราคม 2025, 08:00-10:00"
            price="฿1,800"
            area="3 ไร่"
            button1={{ text: "เริ่มงาน", color: "bg-blue-500" }}
            button2={{ text: "ดูรายละเอียด", color: "bg-gray-300 text-gray-800" }}
          />
        </SectionCard>

        {/* Equipment & Alerts */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <SectionCard title="สถานะอุปกรณ์">
            <EquipmentItem name="DJI Agras T30" desc="โดรนรุ่น T30" status="พร้อมใช้งาน" color="bg-green-100 text-green-700" />
            <EquipmentItem name="เครื่องตัดแต่งกิ่ง" desc="Stihl HT 103" status="ต้องซ่อม" color="bg-yellow-100 text-yellow-700" />
          </SectionCard>
          <SectionCard title="การแจ้งเตือน">
            <AlertItem text="งานเก็บเกี่ยวรอคิว" desc="สวนลุงคำปันทอง - 18 ม.ค. 2025" />
            <AlertItem text="งานปลายเดือน" desc="ไร่สมบูรณ์, 28 ม.ค. 2025" />
            <AlertItem text="รีวิวใหม่" desc="คุณสมชายให้ 5 ดาว" />
          </SectionCard>
        </div>
      </div>
    </div>
  );
}

/* Sub Components */
function StatCard({ label, value, color, emoji }: any) {
  return (
    <div className={`p-4 rounded-lg shadow ${color} flex flex-col items-center`}>
      <span className="text-2xl">{emoji}</span>
      <p className="mt-2 text-sm">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

function ActionButton({ emoji, text, color }: any) {
  return (
    <button className={`p-4 rounded-lg shadow w-full flex flex-col items-center ${color}`}>
      <span className="text-2xl">{emoji}</span>
      <span className="mt-2 text-sm">{text}</span>
    </button>
  );
}

function SectionCard({ title, children }: any) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function JobItem({ title, location, date, price, area, button1, button2 }: any) {
  return (
    <div className="border-b py-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{location}</p>
      <p className="text-sm text-gray-500">{date}</p>
      <div className="mt-2 flex gap-2">
        <button className={`${button1.color} text-white px-4 py-1 rounded`}>{button1.text}</button>
        <button className={`${button2.color} px-4 py-1 rounded`}>{button2.text}</button>
      </div>
      <div className="mt-2 flex justify-between text-sm text-gray-700">
        <span>{price}</span>
        <span>{area}</span>
      </div>
    </div>
  );
}

function EquipmentItem({ name, desc, status, color }: any) {
  return (
    <div className="border-b py-3 flex justify-between items-center">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm ${color}`}>{status}</span>
    </div>
  );
}

function AlertItem({ text, desc }: any) {
  return (
    <div className="border-b py-3">
      <p className="font-semibold">{text}</p>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}
