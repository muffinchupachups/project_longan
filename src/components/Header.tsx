// src/components/Header.tsx
export default function Header() {
  return (
    <header className="bg-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* โลโก้ */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="SmartSensor Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl md:text-2xl font-semibold text-green-900 tracking-tight">
            smartsensor <span className="text-gray-600">longan</span>
          </span>
        </div>

        {/* เมนูหลัก */}
        <nav className="hidden md:flex gap-6 text-green-800 text-sm font-medium">
          <a href="#" className="hover:text-green-600 transition">ติดต่อ</a>
        </nav>

        {/* ปุ่ม */}
        <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-full shadow hover:bg-green-700 transition">
          ล็อกอิน
        </button>
      </div>
    </header>
  );
}
