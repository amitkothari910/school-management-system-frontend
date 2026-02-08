import { useState } from "react";

function Attendance() {
  const [date, setDate] = useState("");
  const [records, setRecords] = useState([
    { id: 1, name: "Rahul Sharma", status: "Present" },
    { id: 2, name: "Priya Verma", status: "Absent" },
  ]);

  const toggleStatus = (id) => {
    setRecords((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: r.status === "Present" ? "Absent" : "Present" }
          : r
      )
    );
  };

  const saveAttendance = () => {
    if (!date) {
      alert("Please select date");
      return;
    }
    alert("Attendance saved (UI only)");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Attendance</h1>
        <input
          type="date"
          className="border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Student</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r) => (
            <tr key={r.id}>
              <td className="border p-2">{r.name}</td>
              <td className="border p-2">{r.status}</td>
              <td className="border p-2">
                <button
                  onClick={() => toggleStatus(r.id)}
                  className={`px-3 py-1 rounded text-white ${
                    r.status === "Present"
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                >
                  Toggle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={saveAttendance}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
      >
        Save Attendance
      </button>
    </div>
  );
}

export default Attendance;
