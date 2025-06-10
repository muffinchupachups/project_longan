import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-[#2F6D4F] text-white flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold p-6">Smart Senser</div>
        <nav className="flex flex-col gap-2 px-4">
          <button
            className="text-left py-2 px-4 rounded bg-[#4F8968]"
            onClick={() => navigate('/dashboard')}
          >
            แดชบอร์ด
          </button>
          <button
            className="text-left py-2 px-4 hover:bg-[#4F8968]"
            onClick={() => navigate('/plot')}
          >
            สวนลำไย
          </button>
          <button
            className="text-left py-2 px-4 hover:bg-[#4F8968]"
            onClick={() => navigate('/calendar')}
          >
            ปฏิทิน
          </button>
          <button
            className="text-left py-2 px-4 hover:bg-[#4F8968]"
            onClick={() => navigate('/fertilizer')}
          >
            คำแนะนำปุ๋ย
          </button>
          <button
            className="text-left py-2 px-4 hover:bg-[#4F8968]"
            onClick={() => navigate('/alert')}
          >
            แจ้งเตือน
          </button>
          <button
            className="text-left py-2 px-4 hover:bg-[#4F8968]"
            onClick={() => navigate('/setting')}
          >
            ตั้งค่า
          </button>
        </nav>
      </div>

      <div className="bg-[#25573F] p-4 text-sm">
        <div className="mb-1 font-semibold">สมชาย ลำไย</div>
        <div className="text-xs">เกษตรกร อำเภอวังชิ้น</div>
      </div>
    </aside>
  );
}
