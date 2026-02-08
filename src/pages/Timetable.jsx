import { useState } from "react";
import TimetableModal from "../components/TimetableModal";

function Timetable() {
  const [slots, setSlots] = useState([
    {
      id: 1,
      day: "Monday",
      time: "09:00 - 10:00",
      className: "10-A",
      subject: "Maths",
      teacher: "Anita Mehra",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState(null);

  const openAddModal = () => {
    setEditingSlot(null);
    setIsModalOpen(true);
  };

  const openEditModal = (slot) => {
    setEditingSlot(slot);
    setIsModalOpen(true);
  };

  const handleSave = (slotData) => {
    if (editingSlot) {
      setSlots((prev) =>
        prev.map((s) => (s.id === editingSlot.id ? slotData : s))
      );
    } else {
      setSlots((prev) => [...prev, slotData]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this timetable slot?")) {
      setSlots((prev) => prev.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Timetable</h1>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Slot
        </button>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Day</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Class</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Teacher</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {slots.map((slot) => (
            <tr key={slot.id}>
              <td className="border p-2">{slot.day}</td>
              <td className="border p-2">{slot.time}</td>
              <td className="border p-2">{slot.className}</td>
              <td className="border p-2">{slot.subject}</td>
              <td className="border p-2">{slot.teacher}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => openEditModal(slot)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(slot.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <TimetableModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        editingSlot={editingSlot}
      />
    </div>
  );
}

export default Timetable;
