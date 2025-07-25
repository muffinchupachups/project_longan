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
    <aside className="w-64 bg-gradient-to-r from-green-800 to-green-400 text-white flex flex-col justify-between">
      <div>
        {/* คลิก Smart Senser แล้วไปหน้า homepage */}

        <div className="flex items-center gap-0"
             onClick={() => navigate('Homepage')} >
          <img
            src="images/logo.png"
            alt="SmartSensor Logo"
            className="h-10 w-10 object-cover rounded-full bg-white mr-1"
          />
          <span className="text-2xl font-bold p-6 cursor-pointer hover:opacity-80 mr-1">
            smartsensor <span className="text-white">longon</span>
          </span>
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
