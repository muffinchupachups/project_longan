import {FiFilter, FiPlus } from "react-icons/fi";
const plots = [
  {
    name: "แปลงลำไยบ้านใต้",
    location: "จ.ลำพูน, เมืองลำพูน",
    size: "12 ไร่",
    moisture: "43%",
    treeHealth: "38%",
    fertilizer: "3%",
    status: "ปกติ",
    updated: "08:45 24 เม.ย. 2567",
    color: "green",
  },
  {
    name: "สวนลำไย",
    location: "จ.มหาสารคาม, ยางตลาด",
    size: "7 ไร่",
    moisture: "22%",
    treeHealth: "38%",
    fertilizer: "0%",
    status: "เฝ้าระวัง",
    updated: "08:45 24 เม.ย. 2567",
    color: "orange",
  },
  {
    name: "แปลงหลังบ้าน",
    location: "จ.มหาสารคาม, เมืองร้อยเอ็ด",
    size: "5 ไร่",
    moisture: "40%",
    treeHealth: "57%",
    fertilizer: "6%",
    status: "ปกติ",
    updated: "07:31 24 เม.ย. 2567",
    color: "green",
  },
];

export default function plotsPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EE] text-gray-800">

      {/* Content */}
      <main className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">แปลงลำไยของฉัน</h2>
          <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded shadow">
            <FiPlus className="mr-2" /> เพิ่มแปลงใหม่
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select className="border rounded px-4 py-2 bg-white text-sm">
            <option>ตำแหน่ง</option>
          </select>
          <select className="border rounded px-4 py-2 bg-white text-sm">
            <option>สถานะ</option>
            <option>ปกติ</option>
            <option>เฝ้าระวัง</option>
          </select>
          <select className="border rounded px-4 py-2 bg-white text-sm">
            <option>เรียงตาม</option>
            <option>อัปเดตล่าสุด</option>
            <option>เรียงตามชื่อ</option>
          </select>
          <button className="flex items-center gap-1 border px-4 py-2 rounded text-sm">
            <FiFilter /> กรอง
          </button>
        </div>

        {/* Plot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plots.map((plot, idx) => (
            <div key={idx} className={`rounded-xl shadow bg-white p-4 border-t-4 ${plot.color === 'green' ? 'border-green-400' : 'border-orange-300'}`}>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-lg">{plot.name}</h3>
                <span className={`text-sm ${plot.color === 'green' ? 'text-green-600' : 'text-orange-600'}`}>{plot.status}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{plot.location}</p>
              <p className="text-sm mb-4">ขนาด: {plot.size}</p>

              <div className="text-sm grid grid-cols-3 gap-2 mb-4">
                <div>ความชื้น<br /><strong>{plot.moisture}</strong></div>
                <div>ต้น<br /><strong>{plot.treeHealth}</strong></div>
                <div>ปุ๋ย<br /><strong>{plot.fertilizer}</strong></div>
              </div>

              <p className="text-xs text-gray-400 text-right">อัปเดตล่าสุด: {plot.updated}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
