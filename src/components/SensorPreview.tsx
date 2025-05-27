// src/components/SensorPreview.tsx
import { Thermometer, Droplet, CloudRain } from "lucide-react";

export default function SensorPreview() {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-lg font-semibold text-green-800 mb-4">
        ตัวอย่างข้อมูลเซ็นเซอร์
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* อุณหภูมิ */}
        <div className="flex items-center gap-3">
          <Thermometer className="text-red-500 w-6 h-6" />
          <div>
            <p className="text-sm text-gray-500">อุณหภูมิ</p>
            <p className="text-xl font-bold text-green-700">31.5°C</p>
          </div>
        </div>

        {/* ปริมาณน้ำฝน */}
        <div className="flex items-center gap-3">
          <CloudRain className="text-blue-500 w-6 h-6" />
          <div>
            <p className="text-sm text-gray-500">ปริมาณน้ำฝน</p>
            <p className="text-xl font-bold text-green-700">0.8 mm</p>
          </div>
        </div>

        {/* ความชื้น */}
        <div className="flex items-center gap-3">
          <Droplet className="text-indigo-500 w-6 h-6" />
          <div>
            <p className="text-sm text-gray-500">ความชื้น</p>
            <p className="text-xl font-bold text-green-700">76%</p>
          </div>
        </div>
      </div>

      <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
        ดูผลละเอียด
      </button>
    </section>
  );
}
