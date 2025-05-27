import {
  Thermometer,
  Droplet,
  Wind,
  CloudRain
} from "lucide-react"; 

const sensorData = [
  { icon: <Thermometer className="text-red-500 w-6 h-6" />, label: "อุณหภูมิ", value: "32°C" },
  { icon: <Droplet className="text-blue-500 w-6 h-6" />, label: "ความชื้น", value: "78%" },
  { icon: <Wind className="text-purple-500 w-6 h-6" />, label: "ฝุ่น", value: "2 µm" },
  { icon: <CloudRain className="text-indigo-500 w-6 h-6" />, label: "ปริมาณน้ำฝน", value: "1.2 mm" },
];

export default function SensorStats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {sensorData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-4 shadow hover:shadow-md transition flex flex-col items-center text-center"
        >
          <div className="mb-2">{item.icon}</div>
          <div className="text-sm text-gray-500">{item.label}</div>
          <div className="text-2xl font-semibold text-green-800">{item.value}</div>
        </div>
      ))}
    </section>
  );
}
