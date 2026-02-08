import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

function Sidebar() {
  const navigate = useNavigate();

  const menuItem =
    "cursor-pointer hover:text-blue-400 transition-colors";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col">
      <h1 className="text-xl font-bold mb-8">Admin Panel</h1>

      <ul className="space-y-4 flex-1">
        <li onClick={() => navigate("/admin")} className={menuItem}>
          Dashboard
        </li>

        <li onClick={() => navigate("/admin/students")} className={menuItem}>
          Students
        </li>

        <li onClick={() => navigate("/admin/teachers")} className={menuItem}>
          Teachers
        </li>

        <li onClick={() => navigate("/admin/classes")} className={menuItem}>
          Classes
        </li>

        <li onClick={() => navigate("/admin/subjects")} className={menuItem}>
          Subjects
        </li>

        <li onClick={() => navigate("/admin/attendance")} className={menuItem}>
          Attendance
        </li>

        <li onClick={() => navigate("/admin/timetable")} className={menuItem}>
          Timetable
        </li>

        <li onClick={() => navigate("/admin/exams")} className={menuItem}>
          Exams & Results
        </li>
      </ul>

      {/* 🔐 LOGOUT */}
      <div
        onClick={handleLogout}
        className="cursor-pointer text-red-400 hover:text-red-600 transition-colors mt-6"
      >
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
