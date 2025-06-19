// src/pages/RegisterPage.tsx
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // mock register
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">สมัครสมาชิก</h2>
        <input type="text" placeholder="ชื่อผู้ใช้" className="w-full px-4 py-2 mb-4 border rounded" required />
        <input type="email" placeholder="อีเมล" className="w-full px-4 py-2 mb-4 border rounded" required />
        <input type="password" placeholder="รหัสผ่าน" className="w-full px-4 py-2 mb-4 border rounded" required />
        <button type="submit" className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">สมัครสมาชิก</button>
        <p className="text-center text-sm mt-4">
          มีบัญชีแล้ว? <span className="text-green-700 cursor-pointer" onClick={() => navigate('/login')}>เข้าสู่ระบบ</span>
        </p>
      </form>
    </div>
  );
}
