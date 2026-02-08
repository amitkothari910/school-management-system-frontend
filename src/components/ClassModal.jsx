import { useEffect, useState } from "react";

function ClassModal({ isOpen, onClose, onSave, editingClass }) {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(editingClass ? editingClass.name : "");
  }, [editingClass]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!name) {
      alert("Class name required");
      return;
    }

    onSave({
      id: editingClass?.id || Date.now(),
      name,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          {editingClass ? "Edit Class" : "Add Class"}
        </h2>

        <input
          type="text"
          placeholder="Class Name"
          className="w-full border p-2 mb-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default ClassModal;
