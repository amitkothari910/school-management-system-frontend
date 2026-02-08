import { useEffect, useState } from "react";

function StudentModal({ isOpen, onClose, onSave, editingStudent }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    className: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setForm(editingStudent);
    } else {
      setForm({ name: "", email: "", className: "" });
    }
  }, [editingStudent]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.className) {
      alert("All fields required");
      return;
    }

    onSave({
      id: editingStudent?.id || Date.now(),
      ...form,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          {editingStudent ? "Edit Student" : "Add Student"}
        </h2>

        <input
          type="text"
          placeholder="Student Name"
          className="w-full border p-2 mb-3 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="text"
          placeholder="Class"
          className="w-full border p-2 mb-4 rounded"
          value={form.className}
          onChange={(e) => setForm({ ...form, className: e.target.value })}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentModal;
