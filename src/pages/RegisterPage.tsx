// src/pages/Register.tsx
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/bglongan.png')", // ✅ รูปสวนลำไย
      }}
    >
      {/* Overlay (ถ้าอยากชัดเต็มๆเอาออกได้) */}
      <div className="absolute inset-0 bg-green-900/30"></div>

      {/* Card */}
      <div className="relative z-10 bg-white shadow-xl rounded-xl w-full max-w-md p-8 border border-green-200">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
          🌱 สมัครสมาชิก
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">ชื่อผู้ใช้</label>
            <input
              type="text"
              placeholder="ชื่อของคุณ"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg bg-white
                         placeholder-gray-400 text-gray-900
                         focus:ring-2 focus:ring-green-600 focus:border-green-400
                         focus:outline-none shadow-sm transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">อีเมล</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg bg-white
                         placeholder-gray-400 text-gray-900
                         focus:ring-2 focus:ring-green-600 focus:border-green-400
                         focus:outline-none shadow-sm transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg bg-white
                         placeholder-gray-400 text-gray-900
                         focus:ring-2 focus:ring-green-600 focus:border-green-400
                         focus:outline-none shadow-sm transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition transform hover:scale-[1.02] shadow-md"
          >
            สมัครสมาชิก
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          มีบัญชีอยู่แล้ว?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-green-700 font-semibold hover:underline"
          >
            เข้าสู่ระบบ
          </button>
        </p>
      </div>
    </div>
  );
}
