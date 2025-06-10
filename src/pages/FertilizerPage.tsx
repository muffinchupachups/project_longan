import { useState } from "react";

export default function FertilizerPage() {
  const [form, setForm] = useState({
    type: "สูตร 15-15-15",
    amount: "30",
    date: "",
    note: ""
  });

  const history = [
    { date: "25 พ.ค. 2568", type: "สูตร 15-15-15", amount: "30", note: "รอบแรก ฤดูฝน", by: "สมชาย" },
    { date: "20 เม.ย. 2568", type: "สูตร 16-20-0", amount: "28", note: "ก่อนดอกผล", by: "สุภา" },
    { date: "15 มี.ค. 2568", type: "10", amount: "10", note: "เตรียมโครงสร้าง", by: "ประเสริฐ" },
  ];

  return (
    <div className="min-h-screen bg-[#F3F6EF] text-gray-800 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-[#3A6E3A]">DSS ลำไย</h1>
        <div className="text-sm">คำแนะนำปุ๋ย</div>
      </header>

      {/* Dropdown */}
      <div className="mb-4">
        <select className="border px-4 py-2 rounded shadow text-sm">
          <option>แปลง 1 - โซนเหนือ</option>
          <option>แปลง 2 - โซนใต้</option>
          <option>แปลง 3 - โซนอีสาน</option>
        </select>
      </div>

      {/* Current Condition */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded shadow p-4">
          <h2 className="font-semibold mb-2">สภาพดินปัจจุบัน</h2>
          <ul className="text-sm space-y-1">
            <li>ความชื้น: <strong>38%</strong></li>
            <li>pH: <strong>5.8</strong></li>
            <li>ธาตุอาหาร: <strong>N ต่ำ, P ต่ำ, K สูง</strong></li>
          </ul>
        </div>

        <div className="bg-[#E8F6F0] rounded shadow p-4">
          <h2 className="font-semibold mb-2">คำแนะนำปุ๋ยโดย AI</h2>
          <ul className="text-sm space-y-1">
            <li>ชนิดปุ๋ย: <strong>สูตร 15-15-15</strong></li>
            <li>ปริมาณ: <strong>30 กก./ไร่</strong></li>
            <li>รอบเวลา: ทุก 30 วัน (ครั้งล่าสุดคือ 25 เม.ย. 2568)</li>
          </ul>
          <button className="mt-2 text-xs underline text-green-700">ตรวจสอบแผนการให้ปุ๋ยฤดูถัดไปเพื่อผลผลิตที่ดีขึ้น</button>
        </div>
      </div>

      {/* Fertilizer Form */}
      <div className="bg-[#FBF8F4] border rounded shadow p-6 mb-6">
        <h2 className="font-semibold mb-4">บันทึกการให้ปุ๋ย</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">ชนิดปุ๋ย</label>
            <select className="w-full border px-3 py-2 rounded text-sm" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option>สูตร 15-15-15</option>
              <option>สูตร 16-20-0</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">ปริมาณ (กก.)</label>
            <input type="number" className="w-full border px-3 py-2 rounded text-sm" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm mb-1">วันที่ให้ปุ๋ย</label>
            <input type="date" className="w-full border px-3 py-2 rounded text-sm" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm mb-1">หมายเหตุ</label>
            <input type="text" className="w-full border px-3 py-2 rounded text-sm" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
          </div>
        </div>
        <button className="bg-[#8D7B57] text-white px-4 py-2 rounded text-sm mt-2">บันทึกข้อมูล</button>
      </div>

      {/* History Table */}
      <div className="bg-[#E9F1E7] rounded shadow p-4">
        <h2 className="font-semibold mb-4">ประวัติการให้ปุ๋ย</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2">วันที่</th>
              <th>ชนิดปุ๋ย</th>
              <th>ปริมาณ (กก.)</th>
              <th>หมายเหตุ</th>
              <th>บันทึกโดย</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, idx) => (
              <tr key={idx} className="border-b text-gray-700">
                <td className="py-2">{item.date}</td>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.note}</td>
                <td>{item.by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 mt-6">
        © 2025 DSS ลำไย Smart Farming
      </footer>
    </div>
  );
}
