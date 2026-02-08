import { useState } from "react";
import TeacherModal from "../components/TeacherModal";

function Teachers() {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Anita Mehra", email: "anita@mail.com", subject: "Maths" },
    { id: 2, name: "Rohit Singh", email: "rohit@mail.com", subject: "Science" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);

  const openAddModal = () => {
    setEditingTeacher(null);
    setIsModalOpen(true);
  };

  const openEditModal = (teacher) => {
    setEditingTeacher(teacher);
    setIsModalOpen(true);
  };

  const handleSave = (teacherData) => {
    if (editingTeacher) {
      setTeachers((prev) =>
        prev.map((t) => (t.id === editingTeacher.id ? teacherData : t))
      );
    } else {
      setTeachers((prev) => [...prev, teacherData]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this teacher?")) {
      setTeachers((prev) => prev.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Teachers</h1>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Teacher
        </button>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td className="border p-2">{teacher.name}</td>
              <td className="border p-2">{teacher.email}</td>
              <td className="border p-2">{teacher.subject}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => openEditModal(teacher)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(teacher.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <TeacherModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        editingTeacher={editingTeacher}
      />
    </div>
  );
}

export default Teachers;
