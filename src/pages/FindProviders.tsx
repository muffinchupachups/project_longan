type Provider = {
  id: number;
  name: string;
  service: string;
  workers: string;
  available: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  avatar: string;
};

const providers: Provider[] = [
  {
    id: 1,
    name: "บริษัท เกษตรกรรมลำไยใหม่",
    service: "✂️ ตัดแต่งต้น",
    workers: "แรงงาน 8 คน • โดรน 2 ลำ",
    available: "ว่าง: 18 ม.ค. 2025",
    location: "เชียงใหม่, สันทราย",
    price: "฿650/ไร่",
    rating: 4.9,
    reviews: 89,
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    name: "ลุงสมชาย เกษตรอินทรีย์",
    service: "🌱 บำรุงต้น",
    workers: "แรงงาน 5 คน",
    available: "ว่าง: 12 ม.ค. 2025",
    location: "ลำปาง, เมือง",
    price: "฿450/ไร่",
    rating: 4.9,
    reviews: 55,
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    id: 3,
    name: "ทีมเก็บเกี่ยวมืออาชีพ",
    service: "🌾 เก็บเกี่ยวผลผลิต",
    workers: "แรงงาน 12 คน • เครื่องจักร",
    available: "ว่าง: 10 ม.ค. 2025",
    location: "เชียงใหม่, ดอยสะเก็ด",
    price: "฿800/ไร่",
    rating: 4.7,
    reviews: 156,
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    id: 4,
    name: "คุณนภัส เกษตรธรรมชาติ",
    service: "✂️ ตัดแต่งต้น",
    workers: "แรงงาน 6 คน",
    available: "ว่าง: 20 ม.ค. 2025",
    location: "ลำพูน, บ้านโฮ่ง",
    price: "฿550/ไร่",
    rating: 4.6,
    reviews: 57,
    avatar: "https://i.pravatar.cc/100?img=25",
  },
  {
    id: 5,
    name: "กลุ่มเกษตรกรสหกรณ์",
    service: "🌱 บำรุงต้น",
    workers: "แรงงาน 10 คน • โดรน 3 ลำ",
    available: "ว่าง: 14 ม.ค. 2025",
    location: "เชียงใหม่, หางดง",
    price: "฿600/ไร่",
    rating: 4.8,
    reviews: 203,
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];

export default function FindProviders() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">หาผู้ให้บริการ</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm">เรียงตาม:</span>
          <select className="border rounded px-2 py-1 text-sm">
            <option>ได้รับความนิยม</option>
            <option>ราคาถูกที่สุด</option>
            <option>รีวิวสูงสุด</option>
            <option>คุ้มค่าที่สุด</option>
          </select>
        </div>
      </div>

      {/* Providers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {providers.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={p.avatar}
                alt={p.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="font-semibold">{p.name}</h2>
                <p className="text-sm text-green-600">{p.service}</p>
              </div>
            </div>
            <p className="text-sm">{p.workers}</p>
            <p className="text-sm text-gray-600">{p.available}</p>
            <p className="text-sm text-gray-600">📍 {p.location}</p>
            <p className="font-bold text-green-600 mt-2">{p.price}</p>
            <p className="text-sm text-yellow-600">
              ⭐ {p.rating} ({p.reviews} รีวิว)
            </p>

            {/* Buttons */}
            <div className="flex gap-2 mt-3">
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1 rounded">
                ดูรายละเอียด
              </button>
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-1 rounded">
                จองบริการ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
