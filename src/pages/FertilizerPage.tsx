import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FertilizerPage() {
  const [form, setForm] = useState({
    type: "สูตร 15-15-15",
    amount: 30,   // กก.
    price: 20,    // บาท/กก.
    date: "",
    note: ""
  });

  const [history, setHistory] = useState([
    { date: "25 พ.ค. 2568", type: "สูตร 15-15-15", amount: 30, price: 20, cost: 600, note: "รอบแรก ดูดฝน", by: "สมชาย" },
    { date: "20 เม.ย. 2568", type: "สูตร 16-20-0", amount: 28, price: 25, cost: 700, note: "ก่อนดอกผล", by: "สุภา" },
    { date: "15 มี.ค. 2568", type: "ยูเรีย", amount: 10, price: 18, cost: 180, note: "เสริมไนโตรเจน", by: "ประเสริฐ" },
  ]);

  const navigate = useNavigate();

  // ฟังก์ชันบันทึก
  const handleSave = () => {
    if (!form.date) return alert("กรุณาเลือกวันที่");
    const cost = form.amount * form.price;
    const newHistory = [
      ...history,
      {
        date: form.date,
        type: form.type,
        amount: form.amount,
        price: form.price,
        cost,
        note: form.note,
        by: "ผู้ใช้",
      },
    ];
    setHistory(newHistory);
    alert(`✅ คำนวณเรียบร้อย: ค่าใช้จ่ายรวม ${cost.toLocaleString()} บาท`);
  };

  return (
    <div className="min-h-screen bg-[#F4F6EF] text-gray-800 p-6 space-y-6">
      <div className="flex justify-between items-center">
        <select className="border border-gray-300 px-4 py-2 rounded-lg shadow text-sm">
          <option>แปลง 1 - โซนเหนือ</option>
        </select>
      </div>

      {/* การคำนวณปุ๋ย */}
      <div className="bg-[#FBF8F4] border border-[#E3D9CA] rounded-2xl shadow p-6">
        <h2 className="font-semibold mb-4">คำนวณปริมาณและค่าใช้จ่ายในการใส่ปุ๋ย</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">ชนิดปุ๋ย</label>
            <select
              className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option>สูตร 15-15-15</option>
              <option>สูตร 16-20-0</option>
              <option>ยูเรีย</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">ปริมาณ (กก.)</label>
            <input
              type="number"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">ราคาปุ๋ย (บาท/กก.)</label>
            <input
              type="number"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1">วันที่ให้ปุ๋ย</label>
            <input
              type="date"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">หมายเหตุ</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm"
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
            />
          </div>
        </div>

        {/* แสดงผลคำนวณ */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm mb-4">
          💰 ค่าใช้จ่ายรวม:{" "}
          <strong className="text-green-700">
            {(form.amount * form.price).toLocaleString()} บาท
          </strong>
        </div>

        <button
          onClick={handleSave}
          className="w-full py-2 rounded-xl text-white font-medium flex items-center justify-center shadow-md"
          style={{
            background: "linear-gradient(90deg, #5E7E3E 0%, #B5925A 100%)",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <span className="mr-2 text-lg">🧮</span> คำนวณและบันทึก
        </button>
      </div>

      {/* ประวัติ */}
      <div className="bg-[#E6F1E7] rounded-2xl shadow p-4 border border-[#C5D8C5]">
        <h2 className="font-semibold mb-4">ประวัติการคำนวณปุ๋ย</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b border-gray-300">
              <th className="py-2">วันที่</th>
              <th>ชนิดปุ๋ย</th>
              <th>ปริมาณ (กก.)</th>
              <th>ราคา/กก. (บาท)</th>
              <th>ค่าใช้จ่าย (บาท)</th>
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
                <td>{item.price}</td>
                <td className="text-green-700 font-semibold">{item.cost}</td>
                <td>{item.note}</td>
                <td>{item.by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔙 ปุ่มย้อนกลับ */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-gray-700 shadow"
        >
          ⬅ ย้อนกลับ
        </button>
      </div>
    </div>
  );
}
