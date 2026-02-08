import { useState } from "react";
import ClassModal from "../components/ClassModal";

function Classes() {
  const [classes, setClasses] = useState([
    { id: 1, name: "10-A" },
    { id: 2, name: "9-B" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClass, setEditingClass] = useState(null);

  const openAddModal = () => {
    setEditingClass(null);
    setIsModalOpen(true);
  };

  const openEditModal = (cls) => {
    setEditingClass(cls);
    setIsModalOpen(true);
  };

  const handleSave = (classData) => {
    if (editingClass) {
      setClasses((prev) =>
        prev.map((c) => (c.id === editingClass.id ? classData : c))
      );
    } else {
      setClasses((prev) => [...prev, classData]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this class?")) {
      setClasses((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Classes</h1>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Class
        </button>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Class Name</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td className="border p-2">{cls.name}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => openEditModal(cls)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(cls.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ClassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        editingClass={editingClass}
      />
    </div>
  );
}

export default Classes;
