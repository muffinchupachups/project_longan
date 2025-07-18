const news = [
  {
    title: "แจ้งเตือนฝนตกหนัก",
    date: "24 พ.ค. 2025",
    description: "โปรดระวังฝนตกหนักในช่วงบ่ายและดูแลต้นลำไยให้แข็งแรง",
    image: "/images/news-1.png",
  },
  {
    title: "ประชาสัมพันธ์งานเก็บเกี่ยว",
    date: "22 พ.ค. 2025",
    description: "เชิญร่วมกิจกรรมงานเก็บเกี่ยวลำไยประจำปีนี้ ณ สวนใกล้บ้านท่าน",
    image: "/images/news-2.png",
  },
  {
    title: "แจ้งเตือนเซนเซอร์",
    date: "20 พ.ค. 2025",
    description: "พบค่าความชื้นต่ำกว่าปกติ ควรตรวจสอบระบบน้ำด่วน",
    image: "/images/news-3.png",
  },
];

export default function NewsSection() {
  return (
    <section>
      <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
        <span className="text-yellow-500 text-xl">📢</span> ข่าวสารแจ้งเตือนล่าสุด
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-w-[100px] h-[150px] object-cover rounded-xl"
            />
            <p className="text-sm text-gray-500">{item.date}</p>
            <h4 className="text-base font-semibold text-green-900 group-hover:underline leading-snug mt-1">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
