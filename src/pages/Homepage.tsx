// src/pages/Homepage.tsx
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SensorStats from "../components/SensorStats";
import ForecastBar from "../components/ForecastBar";
import AdviceToday from "../components/AdviceToday";
import SensorPreview from "../components/SensorPreview";
import NewsSection from "../components/NewsSection";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#f1ffea] font-sans">
      <Header />

      {/* Section 1: Hero */}
      <section className="w-full bg-gradient-to-b from-[#eaf3eb] to-[#f8faf7] py-10">
        <HeroSection />
      </section>

      {/* Section 2: Stats + Forecast + Advice */}
      <section className="w-full bg-[#f8faf7] py-14">
        <div className="w-full px-6 xl:px-20 space-y-14">
          <SensorStats />
          <ForecastBar />

          {/* กล่องคำแนะนำ */}
          <div className="rounded-2xl bg-transparent shadow p-6 md:p-8">
            <AdviceToday/>
          </div>
        </div>
      </section>

      {/* Section 3: Sensor Preview + News */}
      <section className="w-full bg-[#ffffff] py-14">
        <div className="w-full px-6 xl:px-20 space-y-14">

          {/* กล่องเซ็นเซอร์ */}
          <div className="rounded-2xl bg-white shadow p-6 md:p-8">
            <SensorPreview />
          </div>

          {/* ข่าวสาร 3 ช่อง */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <span className="text-yellow-500 text-xl"></span>
            </h3>
            <NewsSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#234d38] text-white text-sm text-center py-6">
      </footer>
    </div>
  );
}
