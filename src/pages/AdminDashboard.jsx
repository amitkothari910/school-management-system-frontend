import Sidebar from "../components/Sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function AdminDashboard() {
  // Dummy stats (later backend se aayenge)
  const stats = [
    { title: "Students", value: 420 },
    { title: "Teachers", value: 32 },
    { title: "Classes", value: 18 },
    { title: "Subjects", value: 54 },
  ];

  const attendanceData = [
    { name: "Present", value: 85 },
    { name: "Absent", value: 15 },
  ];

  const examData = [
    { name: "Class 8", pass: 78 },
    { name: "Class 9", pass: 82 },
    { name: "Class 10", pass: 88 },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        {/* 🔹 STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded shadow text-center"
            >
              <h3 className="text-gray-500">{item.title}</h3>
              <p className="text-3xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* 🔹 CHARTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Attendance Pie */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-4">Attendance Overview</h3>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={attendanceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {attendanceData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Exam Performance Bar */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-4">Exam Performance (%)</h3>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={examData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pass" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
