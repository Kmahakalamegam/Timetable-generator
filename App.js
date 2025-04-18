import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./Components/Sidebar";
import Teachers from "./Page/Teacher";
import Departments from "./Page/Department";
import Classroom from "./Page/Classroom";
import Course from "./Page/Course";
import ClassTiming from "./Page/Classtiming";
import AddTeacher from "./Page/addteacher"; 
import AddClassroom from "./Page/addclassroom";
import AddDepartment from "./Page/adddepartment";
import AddCourse from "./Page/addcourse"
import { Frown } from "lucide-react";
import AddClassTiming from "./Page/addclasstiming";
import WelcomePage from "./Page/WelcomePage";
import MainContent from "./Components/MainContent"


function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-4 w-full">
          <Routes>
            <Route path="/teachers" element={<Teachers />} ></Route>
            <Route path="/departments" element={<Departments />} ></Route>
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/course" element={<Course />} />
            <Route path="/class-timing" element={<ClassTiming />} />
            <Route path="/addteacher" element={<AddTeacher />} />
            <Route path="/adddepartment" element={<AddDepartment />} />
            <Route path="/addcourse" element={<AddCourse />} />
            <Route path="/addclassroom" element={<AddClassroom />} />
            <Route path="/addclasstiming" element={<AddClassTiming/>}/>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/" element={<MainContent/>}/>
       
         
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
