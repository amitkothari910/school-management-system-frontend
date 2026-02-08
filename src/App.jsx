import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Classes from "./pages/Classes";
import Subjects from "./pages/Subjects";
import Attendance from "./pages/Attendance";
import Timetable from "./pages/Timetable";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<Students />} />
        <Route path="/admin/teachers" element={<Teachers />} />
        <Route path="/admin/classes" element={<Classes />} />
        <Route path="/admin/subjects" element={<Subjects />} />
        <Route path="/admin/attendance" element={<Attendance />} />
        <Route path="/admin/timetable" element={<Timetable />} />
        <Route path="/admin" element={<AdminDashboard />} />



      </Routes>
    </BrowserRouter>
  );
}





export default App;
