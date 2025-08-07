import React from "react";

export default function DroneForm() {
  return (
    <div className="min-h-screen bg-[#f2f8f4] py-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* หัวข้อบน */}
        <div className="bg-white border-l-4 border-green-400 rounded-xl p-5 shadow">
          <h1 className="text-lg font-semibold text-green-800 flex items-center gap-2">
            <span className="text-xl">🛩️</span> ลงทะเบียนผู้ให้บริการโดรน
          </h1>
          <p className="text-sm text-gray-600">สำหรับเกษตรกรและผู้ให้บริการ</p>
        </div>

        {/* กล่องข้อมูลอุปกรณ์ */}
        <div className="bg-white rounded-xl p-6 shadow space-y-4">
          <h2 className="text-md font-semibold text-green-700 flex items-center gap-2">
            🛠️ ข้อมูลอุปกรณ์โดรน
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">รุ่นโดรน</label>
              <select className="w-full border border-gray-300 rounded-lg p-2">
                <option>เลือกรุ่นโดรน</option>
                <option>DJI MG-1</option>
                <option>DJI T20</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">ความจุถังปุ๋ย</label>
              <div className="flex items-center gap-2">
                <input type="number" className="w-full border border-gray-300 rounded-lg p-2" defaultValue={40} />
                <span className="text-sm">ลิตร</span>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">ความแม่นยำในการพ่น</label>
              <div className="flex items-center gap-2">
                <input type="number" className="w-full border border-gray-300 rounded-lg p-2" defaultValue={90} />
                <span className="text-sm">%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">ระยะเวลาบินต่อรอบ</label>
              <div className="flex items-center gap-2">
                <input type="number" className="w-full border border-gray-300 rounded-lg p-2" defaultValue={15} />
                <span className="text-sm">นาที</span>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">ความเร็วในการพ่น</label>
              <div className="flex items-center gap-2">
                <input type="number" className="w-full border border-gray-300 rounded-lg p-2" defaultValue={2.5} />
                <span className="text-sm">ไร่/นาที</span>
              </div>
            </div>
          </div>
        </div>

        {/* กล่องอัปโหลดเอกสาร */}
        <div className="bg-white rounded-xl p-6 shadow space-y-4">
          <h2 className="text-md font-semibold text-green-700 flex items-center gap-2">
            📎 เอกสารยืนยันตัวตน
          </h2>

          {/* รูปถ่าย 1 นิ้ว */}
          <div>
            <label className="block text-sm mb-1">รูปถ่าย 1 นิ้ว</label>
            <p className="text-xs text-gray-500 mb-2">JPG, PNG ไม่เกิน 5MB</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="text-green-600 text-3xl mb-2">📷</div>
              <p className="text-green-700 text-sm font-medium">คลิกเพื่ออัปโหลด</p>
              <p className="text-xs text-gray-400">หรือลากไฟล์มาวางที่นี่</p>
            </div>
          </div>

          {/* สำเนาบัตรประชาชน */}
          <div>
            <label className="block text-sm mb-1">สำเนาบัตรประชาชน</label>
            <p className="text-xs text-gray-500 mb-2">PDF, JPG, PNG ไม่เกิน 10MB</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="text-green-600 text-3xl mb-2">📝</div>
              <p className="text-green-700 text-sm font-medium">คลิกเพื่ออัปโหลด</p>
              <p className="text-xs text-gray-400">หรือลากไฟล์มาวางที่นี่</p>
            </div>
          </div>
        </div>

        {/* ปุ่มบันทึก */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow"
          >
            💾 บันทึกข้อมูล
          </button>
        </div>
      </div>
    </div>
  );
}
