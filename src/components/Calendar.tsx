export default function Calendar() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      {/* Header ปฏิทิน */}
      <div className="flex items-center justify-center mb-2">
        <svg className="w-5 h-5 text-[#1E3A2E] mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 2a1 1 0 000 2h8a1 1 0 100-2H6zM3 6a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm2 2v8h10V8H5z" />
        </svg>
        <h2 className="text-md font-semibold text-[#1E3A2E]">ปฏิทิน</h2>
      </div>

      {/* แถวชื่อวัน */}
      <div className="grid grid-cols-7 gap-y-2 text-sm text-center text-[#1E3A2E] font-medium mb-1">
        {["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* แถววันที่ */}
      <div className="grid grid-cols-7 gap-y-2 text-sm text-center">
        {/* วันที่ที่เลยไปแล้วเป็นสีเทาอ่อน */}
        {["26", "27", "28", "29", "30", "31"].map((date) => (
          <div key={date} className="text-[#8A735D]">{date}</div>
        ))}

        {/* วันที่ 1 ที่ highlight สีเขียวอ่อน และตัวหนังสือสีเข้ม */}
        <div className="bg-[#B2E1D9] text-[#1E3A2E] font-semibold rounded-md py-1">1</div>

        {/* วันที่ที่เหลือเป็นสีเขียวเข้มปกติ */}
        {["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"].map((date) => (
          <div key={date} className="text-[#1E3A2E]">{date}</div>
        ))}
      </div>

      {/* ข้อความวันนี้ */}
      <p className="text-xs text-[#8A735D] mt-2 text-center">
        วันนี้: <span className="font-semibold text-[#8A735D]">1 มิ.ย. 67</span>
      </p>
    </div>
  );
}
