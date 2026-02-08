import { useEffect, useState } from "react";

function TeacherModal({ isOpen, onClose, onSave, editingTeacher }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
  });

  useEffect(() => {
    if (editingTeacher) {
      setForm(editingTeacher);
    } else {
      setForm({ name: "", email: "", subject: "" });
    }
  }, [editingTeacher]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.subject) {
      alert("All fields required");
      return;
    }

    onSave({
      id: editingTeacher?.id || Date.now(),
      ...form,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          {editingTeacher ? "Edit Teacher" : "Add Teacher"}
        </h2>

        <input
          type="text"
          placeholder="Teacher Name"
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
          placeholder="Subject"
          className="w-full border p-2 mb-4 rounded"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
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

export default TeacherModal;
