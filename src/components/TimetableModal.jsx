import { useEffect, useState } from "react";

function TimetableModal({ isOpen, onClose, onSave, editingSlot }) {
  const [form, setForm] = useState({
    day: "",
    time: "",
    className: "",
    subject: "",
    teacher: "",
  });

  useEffect(() => {
    setForm(
      editingSlot || {
        day: "",
        time: "",
        className: "",
        subject: "",
        teacher: "",
      }
    );
  }, [editingSlot]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (
      !form.day ||
      !form.time ||
      !form.className ||
      !form.subject ||
      !form.teacher
    ) {
      alert("All fields required");
      return;
    }

    onSave({
      id: editingSlot?.id || Date.now(),
      ...form,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          {editingSlot ? "Edit Slot" : "Add Slot"}
        </h2>

        {["day", "time", "className", "subject", "teacher"].map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field}
            className="w-full border p-2 mb-3 rounded"
            value={form[field]}
            onChange={(e) =>
              setForm({ ...form, [field]: e.target.value })
            }
          />
        ))}

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

export default TimetableModal;
