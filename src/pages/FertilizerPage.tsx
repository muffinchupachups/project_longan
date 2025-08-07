import { useState } from "react";

export default function FertilizerPage() {
  const [form, setForm] = useState({
    type: "สูตร 15-15-15",
    amount: "30",
    date: "",
    note: ""
  });

  const history = [
    { date: "25 พ.ค. 2568", type: "สูตร 15-15-15", amount: "30", note: "รอบแรก ดูดฝน", by: "สมชาย" },
    { date: "20 เม.ย. 2568", type: "สูตร 16-20-0", amount: "28", note: "ก่อนดอกผล", by: "สุภา" },
    { date: "15 มี.ค. 2568", type: "ยูเรีย", amount: "10", note: "เสริมไนโตรเจน", by: "ประเสริฐ" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6EF] text-gray-800 p-6 space-y-6">
      <div className="flex justify-between items-center">
        <select className="border border-gray-300 px-4 py-2 rounded-lg shadow text-sm">
          <option>แปลง 1 - โซนเหนือ</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl shadow p-4 space-y-2 border border-gray-200">
          <h2 className="font-semibold">สภาพดินปัจจุบัน</h2>
          <ul className="text-sm space-y-1">
            <li>ความชื้น: <strong>38%</strong></li>
            <li>ppm: <strong>5.8</strong></li>
            <li>ธาตุอาหาร: <strong>N ต่ำ, P ต่ำ, K สูง</strong></li>
          </ul>
        </div>

        <div className="bg-[#E6F4F1] rounded-2xl shadow p-4 space-y-2 border border-[#D3EDE4]">
          <h2 className="font-semibold">คำแนะนำปุ๋ยโดย AI</h2>
          <ul className="text-sm space-y-1">
            <li>ชนิดปุ๋ย: สูตร 15-15-15</li>
            <li>ปริมาณ: 30 กก./ไร่</li>
            <li>รอบเวลา: ทุก 30 วัน (ครั้งล่าสุดคือ 25 มิ.ย. 2568)</li>
          </ul>
          <button className="text-xs underline text-green-700">ตรวจสอบแผนการให้ปุ๋ยฤดูถัดไปเพื่อผลผลิตที่ดีขึ้น</button>
        </div>
      </div>

      <div className="bg-[#FBF8F4] border border-[#E3D9CA] rounded-2xl shadow p-6">
        <h2 className="font-semibold mb-4">บันทึกการให้ปุ๋ย</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">ชนิดปุ๋ย</label>
            <select className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option>สูตร 15-15-15</option>
              <option>สูตร 16-20-0</option>
              <option>ยูเรีย</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">ปริมาณ (กก.)</label>
            <input type="number" className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm mb-1">วันที่ให้ปุ๋ย</label>
            <input type="date" className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm mb-1">หมายเหตุ</label>
            <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
          </div>
        </div>
        <button className="w-full py-2 rounded-xl text-white font-medium flex items-center justify-center shadow-md"
          style={{
            background: 'linear-gradient(90deg, #5E7E3E 0%, #B5925A 100%)',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)'
          }}
        >
          <span className="mr-2 text-lg">+</span> บันทึกข้อมูล
        </button>
      </div>

      <div className="bg-[#E6F1E7] rounded-2xl shadow p-4 border border-[#C5D8C5]">
        <h2 className="font-semibold mb-4">ประวัติการให้ปุ๋ย</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b border-gray-300">
              <th className="py-2">วันที่</th>
              <th>ชนิดปุ๋ย</th>
              <th>ปริมาณ (กก.)</th>
              <th>หมายเหตุ</th>
              <th>บันทึกโดย</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-300 text-gray-700">
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
    </div>
  );
}
