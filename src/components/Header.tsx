// src/components/Header.tsx
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-green-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* โลโก้ */}
        <div className="flex items-center gap-1">
          <img
            src="/logo.png"
            alt="SmartSensor Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl md:text-2xl font-semibold text-white tracking-tight">
            smartsensor <span className="text-white">longan</span>
          </span>
        </div>

        {/* เมนูหลัก */}
        <nav className="hidden md:flex gap-6 text-green-800 text-sm font-medium">
          <a href="#" className="hover:text-green-600 transition">ติดต่อ</a>
        </nav>

        {/* ปุ่มล็อกอิน */}
        <button
          onClick={() => navigate('/login')}
          className="px-4 py-2 bg-green-600 text-white text-sm rounded-full shadow hover:bg-green-700 transition"
        >
          ล็อกอิน
        </button>
      </div>
    </header>
  );
}
