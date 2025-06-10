import { useState } from "react";
import Dashboard from "../pages/Dashboard";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [goDashboard, setGoDashboard] = useState(false);
  const Navigate = useNavigate();
  if (goDashboard) {
    return <Dashboard />; // ✅ แสดงหน้า Dashboard แทน
  }

  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 md:p-10 shadow-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 leading-snug">
            แพลตฟอร์มวางแผนการเกษตร
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed text-base md:text-lg">
            ใช้ข้อมูลเซ็นเซอร์และสภาพอากาศ<br />
            เพื่อเพิ่มประสิทธิภาพการปลูกลำไยในช่วงสภาพอากาศร้อนจัด
          </p>

          <button
            onClick={() => Navigate("/dashboard")}
            className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
          >
            เริ่มวางแผนการปลูก
          </button>
          
        </div>
        <div className="flex justify-center">
          <img
            src="/images/hero-farm.png"
            alt="ภาพสวนลำไย"
            className="w-full max-w-md rounded-xl shadow"
          />
        </div>
      </div>
    </section>
  );
}
