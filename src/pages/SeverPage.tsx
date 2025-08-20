import { Link } from "react-router-dom";
import { FiBell, FiHome } from "react-icons/fi";

/* ===== Types ===== */
type Stat = { label: string; value: string; icon: string; tone: string };
type Job = { title: string; location: string; date: string; price: string; area: string; status: "ทำเสร็จแล้ว" | "รอดำเนินการ" };
type Equip = { name: string; desc: string; status: string; tone: string };
type Notice = { title: string; desc: string; tone: string };

/* ===== Data ===== */
const stats: Stat[] = [
  { label: "สถานะปัจจุบัน", value: "พร้อมรับงาน", icon: "✅", tone: "bg-green-50 border-green-200" },
  { label: "งานรอดำเนินการ", value: "5", icon: "📋", tone: "bg-blue-50 border-blue-200" },
  { label: "รายได้เดือนนี้", value: "฿12,500", icon: "💰", tone: "bg-amber-50 border-amber-200" },
  { label: "คะแนนรีวิว", value: "4.8", icon: "⭐", tone: "bg-orange-50 border-orange-200" },
];

const jobs: Job[] = [
  {
    title: "จัดแปลงนา - ไร่คุณสมศักดิ์",
    location: "อำเภอเมือง, จังหวัดลำปาง",
    date: "วันที่ 15 มกราคม 2025, 08:00-12:00",
    price: "฿2,500",
    area: "5 ไร่",
    status: "ทำเสร็จแล้ว",
  },
  {
    title: "ตัดแต่งกิ่ง - สวนลุงคำปันทอง",
    location: "อำเภอห้างฉัตร, จังหวัดลำปาง",
    date: "วันที่ 16 มกราคม 2025, 06:00-10:00",
    price: "฿1,800",
    area: "3 ไร่",
    status: "รอดำเนินการ",
  },
];

const equips: Equip[] = [
  { name: "DJI Agras T30", desc: "โดรนรุ่น T30 30 ลิตร", status: "พร้อมใช้งาน", tone: "bg-green-100 text-green-700" },
  { name: "เครื่องตัดแต่งกิ่ง", desc: "Stihl HT 103", status: "ต้องซ่อม", tone: "bg-yellow-100 text-yellow-700" },
];

const notices: Notice[] = [
  { title: "งานเก็บเกี่ยวรอคิว", desc: "สวนลุงคำปันทอง – 18 ม.ค. 2025", tone: "bg-blue-50" },
  { title: "งานเสร็จสิ้น", desc: "ได้รับแล้ว ฿2,000", tone: "bg-green-50" },
  { title: "รีวิวใหม่", desc: "คุณสมชายให้ 5 ดาว", tone: "bg-orange-50" },
];

/* ===== Main Page ===== */
export default function ServerPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-sans">
            <span className="text-green-600 text-lg">🌱</span>
            <span className="font-medium">Smart Sensor Longan</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <button className="flex items-center gap-1 text-green-600 font-semibold">
              <FiHome /> แดชบอร์ด
            </button>
            <Link to="/calendarserver" className="hover:text-slate-900">ปฏิทินงาน</Link>
            <a className="hover:text-slate-900" href="#">อุปกรณ์</a>
            <a className="hover:text-slate-900" href="#">ราคา</a>
            <Link to="/profileview" className="hover:text-slate-900">โปรไฟล์</Link>
          </nav>

          <button className="relative p-2 rounded-full hover:bg-slate-100">
            <FiBell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-500" />
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-lg border p-4 flex items-center gap-3 ${s.tone}`}
            >
              <div className="text-xl">{s.icon}</div>
              <div>
                <p className="text-sm text-slate-600">{s.label}</p>
                <p className="text-lg font-semibold">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Jobs */}
        <div className="rounded-lg border p-4 mt-6 bg-green-50 border-green-200">
          <h2 className="font-semibold mb-3 text-green-700">งานปัจจุบัน</h2>
          <div className="divide-y divide-slate-200">
            {jobs.map((j) => (
              <div key={j.title} className="py-3 flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-slate-800">{j.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">📍 {j.location}</p>
                  <p className="text-sm text-slate-600 mt-1">⏰ {j.date}</p>

                  {j.status === "ทำเสร็จแล้ว" ? (
                    <div className="mt-2 flex gap-2">
                      <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700">
                        ยืนยันสถานะ
                      </button>
                      <button className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-md">
                        ติดต่อผู้จ้าง
                      </button>
                    </div>
                  ) : (
                    <div className="mt-2 flex gap-2">
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                        เริ่มงาน
                      </button>
                      <button className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-md">
                        ดูรายละเอียด
                      </button>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-700">{j.price}</p>
                  <p className="text-sm text-slate-600">{j.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipments + Notices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="rounded-lg border p-4 bg-white">
            <h2 className="font-semibold mb-3 text-slate-800">สถานะอุปกรณ์</h2>
            <div className="space-y-3">
              {equips.map((e) => (
                <div key={e.name} className="rounded-md border p-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-800">{e.name}</p>
                    <p className="text-sm text-slate-500">{e.desc}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${e.tone}`}>
                    {e.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border p-4 bg-white">
            <h2 className="font-semibold mb-3 text-slate-800">การแจ้งเตือน</h2>
            <div className="space-y-3">
              {notices.map((n, i) => (
                <div key={i} className={`rounded-md border p-3 ${n.tone}`}>
                  <p className="font-semibold text-slate-800">{n.title}</p>
                  <p className="text-sm text-slate-600">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
