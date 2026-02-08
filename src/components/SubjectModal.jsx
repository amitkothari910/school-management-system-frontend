import { useEffect, useState } from "react";

function SubjectModal({ isOpen, onClose, onSave, editingSubject }) {
  const [form, setForm] = useState({ name: "", className: "" });

  useEffect(() => {
    setForm(
      editingSubject || { name: "", className: "" }
    );
  }, [editingSubject]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!form.name || !form.className) {
      alert("All fields required");
      return;
    }

    onSave({
      id: editingSubject?.id || Date.now(),
      ...form,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          {editingSubject ? "Edit Subject" : "Add Subject"}
        </h2>

        <input
          type="text"
          placeholder="Subject Name"
          className="w-full border p-2 mb-3 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Class"
          className="w-full border p-2 mb-4 rounded"
          value={form.className}
          onChange={(e) => setForm({ ...form, className: e.target.value })}
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
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

export default SubjectModal;
