export default function AdviceToday() {
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center">
      {/* ฝั่งข้อความ */}
      <div className="bg-[#ffffff] p-6 rounded-2xl shadow space-y-3">
        <h3 className="flex items-center gap-2 text-green-800 font-semibold text-lg">
          <span className="text-yellow-500">💡</span> คำแนะนำการปลูกวันนี้
        </h3>

        <p className="text-sm text-gray-700 leading-relaxed">
          วันนี้เหมาะสำหรับเตรียมดินและให้น้ำ เนื่องจากอุณหภูมิสูงและมีความชื้นในอากาศ เหมาะสำหรับการลงต้นกล้าลำไย
        </p>
      </div>

      {/* ฝั่งรูปภาพ */}
      <img
        src="/images/aleart.png"
        alt="คำแนะนำ"
        className="w-full max-w-[300px] h-[200px] object-cover rounded-xl"
      />
    </section>
  );
}
