export default function DroneForm() {
  return (
    <div className="min-h-screen bg-[#f1eae1] px-4 py-10 font-sans">
      <div className="max-w-4xl mx-auto bg-[#a5afab] rounded-3xl p-8 shadow-md">
        <h1 className="text-2xl text-center font-semibold bg-[#e7e1d9] text-black rounded-full py-2 w-fit px-6 mx-auto mb-8">
          กลุ่มคนบินโดรนพ่นปุ๋ย
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ซ้าย: ข้อมูลทั่วไป */}
          <div className="space-y-4">
            <div>
              <label className="block text-black">ชื่อ</label>
              <input
                type="text"
                className="w-full rounded-lg bg-[#f1eae1] p-2"
              />
            </div>
            <div>
              <label className="block text-black">อายุ</label>
              <input
                type="number"
                className="w-full rounded-lg bg-[#f1eae1] p-2"
              />
            </div>
            <div>
              <label className="block text-black">หมายเลขโทรศัพท์</label>
              <input
                type="tel"
                className="w-full rounded-lg bg-[#f1eae1] p-2"
              />
            </div>
            <div>
              <label className="block text-black">จำนวนโดรน</label>
              <input
                type="number"
                className="w-full rounded-lg bg-[#f1eae1] p-2"
              />
            </div>
            <div>
              <label className="block text-black">พาหนะที่ใช้ในการเดินทาง</label>
              <input
                type="text"
                className="w-full rounded-lg bg-[#f1eae1] p-2"
              />
            </div>
          </div>

          {/* ขวา: ประสบการณ์ & เอกสาร */}
          <div className="space-y-6">
            <div className="bg-[#e7e1d9] rounded-2xl p-4">
              <label className="block text-black mb-2">
                มีประสบการณ์พ่นปุ๋ยหรือไม่ (ใช่/ไม่ใช่)
              </label>
              <input
                type="text"
                className="w-full rounded-lg bg-white p-2"
              />
            </div>

            <div className="bg-[#e7e1d9] rounded-2xl p-4 space-y-3">
              <p className="text-black">
                เอกสารสำคัญ เช่น รูปถ่าย 1 นิ้ว, สำเนาบัตรประชาชน
                <br />
                (อัปโหลดไฟล์)
              </p>

              <select className="w-full rounded-lg bg-white p-2">
                <option>เลือกรูปถ่าย 1 นิ้ว</option>
              </select>
              <select className="w-full rounded-lg bg-white p-2">
                <option>เลือกสำเนาบัตรประชาชน</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
