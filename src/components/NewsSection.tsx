// src/components/NewsSection.tsx
const news = [
  {
    title: "วิธีเตรียมแปลงลำไยก่อนฤดูร้อน",
    date: "24 พ.ค. 2568",
  },
  {
    title: "การใช้น้ำอย่างมีประสิทธิภาพในช่วงเอลนีโญ",
    date: "20 พ.ค. 2568",
  },
  {
    title: "ป้องกันโรคพืชด้วยข้อมูลเซ็นเซอร์",
    date: "15 พ.ค. 2568",
  },
];

export default function NewsSection() {
  return (
    <section>
      <h3 className="text-lg font-semibold text-green-800 mb-4">
        ข่าวสารล่าสุด
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition group"
          >
            <h4 className="text-base font-semibold text-green-900 group-hover:underline leading-snug">
              {item.title}
            </h4>
            <p className="text-sm text-gray-500 mt-1">{item.date}</p>
            <a
              href="#"
              className="text-sm text-green-600 mt-3 inline-block hover:underline"
            >
              อ่านเพิ่มเติม →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
