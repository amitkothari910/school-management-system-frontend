import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import StudentModal from "../components/StudentModal";
import API from "../api/api";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/api/students");
      setStudents(res.data.students || res.data);
    } catch (err) {
      alert("Failed to fetch students");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 MERGED onSave LOGIC
  const handleSaveStudent = async (data) => {
    try {
      if (editingStudent) {
        await API.put(`/api/students/${editingStudent.id}`, data);
      } else {
        await API.post("/api/students", data);
      }

      setIsModalOpen(false);
      setEditingStudent(null);
      fetchStudents();
    } catch (err) {
      alert("Failed to save student");
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Students</h2>

          <button
            onClick={() => {
              setEditingStudent(null);
              setIsModalOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Add Student
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="bg-white rounded shadow overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">#</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id} className="border-t">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{student.name}</td>
                    <td className="p-3">{student.email}</td>
                    <td className="p-3">{student.className}</td>
                    <td className="p-3">
                      <button
                        onClick={() => {
                          setEditingStudent(student);
                          setIsModalOpen(true);
                        }}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <StudentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveStudent}
          editingStudent={editingStudent}
        />
      </div>
    </div>
  );
}

export default Students;
