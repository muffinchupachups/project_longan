// src/pages/LoginPage.tsx
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // mock login
    navigate('/dashboard'); // ไปหน้า homepage หรือ dashboard หลัง login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">เข้าสู่ระบบ</h2>
        <input type="text" placeholder="อีเมลหรือชื่อผู้ใช้" className="w-full px-4 py-2 mb-4 border rounded" required />
        <input type="password" placeholder="รหัสผ่าน" className="w-full px-4 py-2 mb-4 border rounded" required />
        <button type="submit" className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">เข้าสู่ระบบ</button>
        <p className="text-center text-sm mt-4">
          ยังไม่มีบัญชี? <span className="text-green-700 cursor-pointer" onClick={() => navigate('/register')}>สมัครสมาชิก</span>
        </p>
      </form>
    </div>
  );
}
