// src/components/AdviceToday.tsx
export default function AdviceToday() {
  return (
    <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-amber-700 mb-1">คำแนะนำวันนี้ 🌱</h3>
      <p className="text-gray-700">
        วันนี้ควรทำการตัดแต่งกิ่งและงดการให้น้ำในช่วงบ่าย
        เนื่องจากอุณหภูมิสูงและมีความชื้นสะสมในแปลง
      </p>
      <button className="mt-3 inline-block px-4 py-1.5 bg-amber-500 text-white text-sm rounded hover:bg-amber-600">
        ดูคำแนะนำเพิ่มเติม
      </button>
    </section>
  );
}
