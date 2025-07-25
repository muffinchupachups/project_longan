import { useNavigate } from "react-router-dom";

export default function Login2() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔐 ถ้ามีการตรวจสอบจริง เช่น call API ตรงนี้ ให้ทำก่อน navigate
    // สมมุติว่าล็อกอินสำเร็จแล้ว
    navigate("/joindrone");
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        <h1 className="text-2xl font-semibold text-green-800 mb-6 text-center">
          เข้าสู่ระบบ
        </h1>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">อีเมล</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          ยังไม่มีบัญชี?{" "}
          <button onClick={() => navigate("/register2")} className="text-green-700 font-medium">
            สมัครสมาชิก
          </button>
        </p>
      </div>
    </div>
  );
}