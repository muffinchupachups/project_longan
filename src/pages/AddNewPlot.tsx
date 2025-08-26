import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle, FiTrendingUp, FiEye } from "react-icons/fi";
import { GiPlantSeed } from "react-icons/gi";

export default function AddNewPlot() {
  const navigate = useNavigate();

  const [plotName, setPlotName] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [size, setSize] = useState(0);
  const [gps, setGps] = useState("");
  const [variety, setVariety] = useState("");
  const [trees, setTrees] = useState(0);
  const [plantDate, setPlantDate] = useState("");
  const [moisture, setMoisture] = useState(0);
  const [fertilizer, setFertilizer] = useState(0);
  const [status, setStatus] = useState("ปกติ");

  const handleSave = () => {
    const data = {
      plotName,
      province,
      district,
      size,
      gps,
      variety,
      trees,
      plantDate,
      moisture,
      fertilizer,
      status,
    };
    console.log("✅ New Plot:", data);
    alert("บันทึกแปลงใหม่สำเร็จ!");
    navigate("/plots");
  };

  // 🎨 กำหนดสี Preview Card ตามสถานะ
  const statusColor =
    status === "ปกติ"
      ? "border-green-200 bg-green-50"
      : status === "เฝ้าระวัง"
      ? "border-orange-200 bg-orange-50"
      : "border-red-200 bg-red-50";

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-slate-600 hover:text-slate-900"
        >
          ← กลับ
        </button>
        <h1 className="text-xl font-semibold">เพิ่มแปลงใหม่</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="md:col-span-2 space-y-6">
          {/* General Info */}
          <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
            <h2 className="font-semibold mb-4 flex items-center gap-2 text-green-700">
              <FiCheckCircle className="text-green-600" /> ข้อมูลทั่วไป
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="text-sm">ชื่อแปลง *</label>
                <input
                  type="text"
                  value={plotName}
                  onChange={(e) => setPlotName(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  placeholder="เช่น สวนลำไยบ้านใต้"
                />
              </div>
              <div>
                <label className="text-sm">จังหวัด</label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                >
                  <option value="">เลือกจังหวัด</option>
                  <option value="ลำพูน">ลำพูน</option>
                  <option value="เชียงใหม่">เชียงใหม่</option>
                </select>
              </div>
              <div>
                <label className="text-sm">อำเภอ</label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                >
                  <option value="">เลือกอำเภอ</option>
                  <option value="เมือง">เมือง</option>
                  <option value="ยางตลาด">ยางตลาด</option>
                </select>
              </div>
              <div>
                <label className="text-sm">ขนาดพื้นที่ (ไร่)</label>
                <input
                  type="number"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                />
              </div>
              <div>
                <label className="text-sm">พิกัด GPS</label>
                <input
                  type="text"
                  value={gps}
                  onChange={(e) => setGps(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  placeholder="18.7883, 98.9853"
                />
              </div>
            </div>
          </div>

          {/* Cultivation Info */}
          <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
            <h2 className="font-semibold mb-4 flex items-center gap-2 text-green-700">
              <GiPlantSeed className="text-green-600" /> ข้อมูลการปลูก
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm">พันธุ์ลำไย</label>
                <select
                  value={variety}
                  onChange={(e) => setVariety(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                >
                  <option value="">เลือกพันธุ์</option>
                  <option value="อีดอ">อีดอ</option>
                  <option value="พวงทอง">พวงทอง</option>
                  <option value="เพชรน้ำเอก">เพชรน้ำเอก</option>
                </select>
              </div>
              <div>
                <label className="text-sm">จำนวนต้นทั้งหมด</label>
                <input
                  type="number"
                  value={trees}
                  onChange={(e) => setTrees(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                />
              </div>
              <div className="col-span-2">
                <label className="text-sm">วันที่เริ่มปลูก</label>
                <input
                  type="date"
                  value={plantDate}
                  onChange={(e) => setPlantDate(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                />
              </div>
            </div>
          </div>

          {/* Initial Values */}
          <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
            <h2 className="font-semibold mb-4 flex items-center gap-2 text-green-700">
              <FiTrendingUp className="text-green-600" /> ค่าเริ่มต้นของแปลง
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm">ความชื้น (%)</label>
                <input
                  type="number"
                  value={moisture}
                  onChange={(e) => setMoisture(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                />
              </div>
              <div>
                <label className="text-sm">ปุ๋ย (%)</label>
                <input
                  type="number"
                  value={fertilizer}
                  onChange={(e) => setFertilizer(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                />
              </div>
              <div>
                <label className="text-sm">สถานะ</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                >
                  <option value="ปกติ">ปกติ</option>
                  <option value="เฝ้าระวัง">เฝ้าระวัง</option>
                  <option value="มีปัญหา">มีปัญหา</option>
                </select>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2"
            >
              บันทึกแปลงใหม่
            </button>
            <button
              onClick={() => navigate("/plots")}
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center gap-2"
            >
              ยกเลิก
            </button>
          </div>
        </div>

        {/* ✅ Preview Card */}
        <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm h-fit">
          <h2 className="font-semibold mb-4 flex items-center gap-2 text-green-700">
            <FiEye className="text-green-600" /> ตัวอย่างแปลง
          </h2>

          <div className={`rounded-lg border p-4 ${statusColor}`}>
            {/* ชื่อแปลง + สถานะ */}
            <div className="flex justify-between items-center mb-1">
              <p className="font-semibold">{plotName || "ชื่อแปลง"}</p>
              <span
                className={`text-sm font-medium ${
                  status === "ปกติ"
                    ? "text-green-700"
                    : status === "เฝ้าระวัง"
                    ? "text-orange-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </span>
            </div>

            {/* จังหวัด */}
            <p className="text-sm text-slate-600 mb-3">
              {province || "ไม่ระบุจังหวัด"} {district}
            </p>

            {/* ข้อมูล 2 คอลัมน์ */}
            <div className="grid grid-cols-2 gap-y-3 text-sm mb-3">
              <div className="flex items-center gap-2">
                <span className="text-green-700">🗺️</span> {size} ไร่
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-700">🌳</span> {trees} ต้น
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-700">💧</span> {moisture}%
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-700">🍃</span> {fertilizer}%
              </div>
            </div>

            {/* เส้นคั่น */}
            <hr className="border-t border-green-200 my-2" />

            {/* พันธุ์ */}
            <p className="text-sm text-slate-600">
              พันธุ์: {variety || "ไม่ระบุ"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
