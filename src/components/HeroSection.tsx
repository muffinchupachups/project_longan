import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 md:p-10 shadow-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 leading-snug">
            แพลตฟอร์มวางแผนการเกษตร
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed text-base md:text-lg">
            ใช้ข้อมูลเซ็นเซอร์และสภาพอากาศ<br />
            เพื่อเพิ่มประสิทธิภาพการปลูกลำไยในช่วงสภาพอากาศร้อนจัด
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-6 flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition text-sm"
          >
            <span>🌱</span> เริ่มวางแผนเพาะปลูก
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/longan-farm.png"
            alt="ภาพสวนลำไย"
            className="w-full max-w-[500px] h-[400px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
