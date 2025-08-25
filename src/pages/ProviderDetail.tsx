import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const providers = [
  {
    name: "นายสมชาย ใจดี",
    fertilizer: "5 กก./ไร่",
    area: "10 ไร่",
    workers: "3 คน",
    time: "4 ชม.",
    total: "฿5,000",
  },
  {
    name: "นายประเสริฐ มั่นคง",
    fertilizer: "7 กก./ไร่",
    area: "15 ไร่",
    workers: "5 คน",
    time: "6 ชม.",
    total: "฿7,500",
  },
  {
    name: "นางสาวสุดา เที่ยวทาง",
    fertilizer: "6 กก./ไร่",
    area: "12 ไร่",
    workers: "4 คน",
    time: "5 ชม.",
    total: "฿6,200",
  },
];

export default function ProviderDetail() {
  const [select1, setSelect1] = useState("นายสมชาย ใจดี");
  const [select2, setSelect2] = useState("นายประเสริฐ มั่นคง");
  const [select3, setSelect3] = useState("นางสาวสุดา เที่ยวทาง");

  const p1 = providers.find((p) => p.name === select1)!;
  const p2 = providers.find((p) => p.name === select2)!;
  const p3 = providers.find((p) => p.name === select3)!;

  // กราฟแท่ง
  const barData = [
    { name: "สมชาย", cost: 500 },
    { name: "ประเสริฐ", cost: 480 },
    { name: "สุดา", cost: 520 },
  ];

  // กราฟวงกลม
  const pieData = [
    { name: "แรงงาน", value: 55, color: "#22c55e" },
    { name: "ปุ๋ย/ฮอร์โมน", value: 25, color: "#3b82f6" },
    { name: "เครื่องมือ", value: 10, color: "#f97316" },
    { name: "อื่นๆ", value: 5, color: "#ef4444" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Profile */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100?img=55"
          alt="provider"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">นายสมชาย ใจดี</h2>
          <p>📞 089-123-4567</p>
          <p>📧 somchai@email.com</p>
          <p>📍 ลำพูน, เมืองลำพูน</p>
        </div>
      </div>

      {/* ตารางบริการ */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold mb-2">ตารางบริการ</h3>
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">ประเภทบริการ</th>
              <th className="p-2 text-left">จำนวนแรงงาน/โดรน</th>
              <th className="p-2 text-left">วัน-เวลาที่ว่าง</th>
              <th className="p-2 text-left">ราคา/ไร่</th>
              <th className="p-2 text-left">พิกัด</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">ตัดแต่งต้น</td>
              <td className="p-2">3 คน</td>
              <td className="p-2">15 ม.ค. 2025, 08:00-12:00</td>
              <td className="p-2 text-green-600">฿500/ไร่</td>
              <td className="p-2">ลำพูน</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">เก็บเกี่ยว</td>
              <td className="p-2">2 โดรน</td>
              <td className="p-2">16 ม.ค. 2025, 06:00-10:00</td>
              <td className="p-2 text-green-600">฿2,500/5 ไร่</td>
              <td className="p-2">ลำปาง</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">บำรุงต้น</td>
              <td className="p-2">4 คน</td>
              <td className="p-2">18 ม.ค. 2025, 07:00-11:00</td>
              <td className="p-2 text-green-600">฿750/ไร่</td>
              <td className="p-2">ลำพูน</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* เปรียบเทียบ */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold mb-4">เปรียบเทียบผู้ให้บริการ</h3>

        {/* dropdown เลือกผู้ให้บริการ */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <select
            value={select1}
            onChange={(e) => setSelect1(e.target.value)}
            className="border rounded p-2"
          >
            {providers.map((p) => (
              <option key={p.name}>{p.name}</option>
            ))}
          </select>
          <select
            value={select2}
            onChange={(e) => setSelect2(e.target.value)}
            className="border rounded p-2"
          >
            {providers.map((p) => (
              <option key={p.name}>{p.name}</option>
            ))}
          </select>
          <select
            value={select3}
            onChange={(e) => setSelect3(e.target.value)}
            className="border rounded p-2"
          >
            {providers.map((p) => (
              <option key={p.name}>{p.name}</option>
            ))}
          </select>
        </div>

        {/* ตารางเปรียบเทียบ */}
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">รายการ</th>
              <th className="p-2">{p1.name.split(" ")[0]}</th>
              <th className="p-2">{p2.name.split(" ")[0]}</th>
              <th className="p-2">{p3.name.split(" ")[0]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">ปริมาณปุ๋ย/ฮอร์โมน</td>
              <td className="p-2">{p1.fertilizer}</td>
              <td className="p-2">{p2.fertilizer}</td>
              <td className="p-2">{p3.fertilizer}</td>
            </tr>
            <tr>
              <td className="p-2">ขนาดพื้นที่ (ไร่)</td>
              <td className="p-2">{p1.area}</td>
              <td className="p-2">{p2.area}</td>
              <td className="p-2">{p3.area}</td>
            </tr>
            <tr>
              <td className="p-2">จำนวนแรงงาน</td>
              <td className="p-2">{p1.workers}</td>
              <td className="p-2">{p2.workers}</td>
              <td className="p-2">{p3.workers}</td>
            </tr>
            <tr>
              <td className="p-2">ระยะเวลา (ชม.)</td>
              <td className="p-2">{p1.time}</td>
              <td className="p-2">{p2.time}</td>
              <td className="p-2">{p3.time}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">ต้นทุนรวม</td>
              <td className="p-2 text-green-600">{p1.total}</td>
              <td className="p-2 text-blue-600">{p2.total}</td>
              <td className="p-2 text-purple-600">{p3.total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* กราฟ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">ต้นทุนรวม/ไร่</h3>
          <BarChart width={300} height={250} data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cost" fill="#22c55e" />
          </BarChart>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">สัดส่วนค่าใช้จ่าย</h3>
          <PieChart width={300} height={250}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-4">
        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded">
          จองบริการ
        </button>
        <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
          ติดต่อผู้ให้บริการ
        </button>
      </div>
    </div>
  );
}
