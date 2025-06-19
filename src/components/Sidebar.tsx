import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/dashboard', label: 'แดชบอร์ด' },
    { path: '/plot', label: 'สวนลำไย' },
    { path: '/calendar', label: 'ปฏิทิน' },
    { path: '/fertilizer', label: 'คำแนะนำปุ๋ย' },
    { path: '/alert', label: 'แจ้งเตือน' },
    { path: '/setting', label: 'ตั้งค่า' },
  ];

  return (
    <aside className="w-64 bg-[#2F6D4F] text-white flex flex-col justify-between">
      <div>
        {/* คลิก Smart Senser แล้วไปหน้า homepage */}
        <div
          className="text-2xl font-bold p-6 cursor-pointer hover:opacity-80"
          onClick={() => navigate('Homepage')}
        >
          Smart Senser
        </div>

        <nav className="flex flex-col gap-2 px-4">
          {menuItems.map((item) => (
            <button
              key={item.path}
              className={`text-left py-2 px-4 rounded ${
                isActive(item.path)
                  ? 'bg-[#4F8968] text-white'
                  : 'hover:bg-[#4F8968]'
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-[#25573F] p-4 text-sm">
        <div className="mb-1 font-semibold">สมชาย ลำไย</div>
        <div className="text-xs">เกษตรกร อำเภอวังชิ้น</div>
      </div>
    </aside>
  );
}
