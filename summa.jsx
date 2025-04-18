import { Button,Box,Typography} from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';
  
      const Teacher = () => {
        return (
            <div>
 <div className=" bg-gray-200 px-3 py-9  w-[100%]   " >
<Box className="items-center flex justify-between mb-3 rounded hover-shadow -lg hover:bg-blue-500 py-2 px-4">
<Typography variant="h5" sx={{ fontWeight: "bold", color: "black"  }}> Add Teachers </Typography>
 <Button variant="contained"  sx={{marginLeft:"500px"}}>  Delete</Button> </Box>
<div className="bg-white px-5 py-10 rounded-1xl border-2 border-white w-[95%] h-9px mx-auto mt-5 " > 
 <div className={{marginTop:"20px"}}>
 <h1 style={{marginLeft:"10px"}}>Teacher ID</h1>
 <TextField id="outlined-basic" label="TeacherID" variant="outlined" sx={{width:"950px", marginTop:"10px", marginLeft:"10px","& .MuiOutlinedInput-root": {
                borderRadius: 3 }}} />
</div>
      
 <div className="mt-16 p-1" >
<h1>Teacher Name</h1>
<form>
 <TextField id="outlined-basic" label="Teacher Name" variant="outlined" sx={{width:"950px", marginTop:"8px","& .MuiOutlinedInput-root": {
  borderRadius: 3 }}} />
  </form>
 </div>
 <div className="mt-16 p-1">
               
 <h1>Department</h1>
 <TextField id="outlined-basic" label="Department" variant="outlined" sx={{width:"950px", marginTop:"8px","& .MuiOutlinedInput-root": {
 borderRadius: 3 }}} />
</div>
 <Button variant="contained" sx={{marginLeft:"445px" , marginTop:"45px"}}>Submit</Button>
 </div> 
         </div>
         </div>
            
        );
      }
      
      export default Teacher;



      import { Button,Box,Typography} from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';



const Department = () => {
    return (
        
            
 <div className=" bg-gray-200 px-3 py-9  w-[100%]  " >
<Box className="items-center flex justify-between mb-3 rounded hover-shadow -lg hover:bg-blue-500 py-2 px-4">
<Typography variant="h5" sx={{ fontWeight: "bold", color: "black"  }}> Add Department </Typography>
 <Button variant="contained"  sx={{marginLeft:"500px"}}>  Delete</Button> </Box>

<div className="bg-white px-5 py-10 rounded-1xl border-2 border-white w-[95%]  " > 
   <div style={{marginTop:"50px"}}>
     <h1 style={{marginLeft:"10px"}}>Department Name</h1>
     <TextField id="outlined-basic" label="Department Name" variant="outlined" sx={{width:"950px", marginTop:"10px", marginLeft:"15px","& .MuiOutlinedInput-root": {
    borderRadius: 4 }}} />
  </div>
  
 <div className="mt-16 p-2" >
            
            <h1>Course ID</h1>
            <TextField id="outlined-basic" label="Course Id" variant="outlined" sx={{width:"950px", marginTop:"8px","& .MuiOutlinedInput-root": {
            borderRadius: 4 }}} />
            
  </div>
      <div className="mt-16 p-2">
           
            <h1>Course Name</h1>
            <TextField id="outlined-basic" label="Course Name" variant="outlined" sx={{width:"950px", marginTop:"8px","& .MuiOutlinedInput-root": {
            borderRadius: 4 }}} />
      </div>
      <Button variant="contained" sx={{marginLeft:"445px" , marginTop:"45px"}}>Submit</Button>
      </div>
     
 
 </div> 

        
    )
}
export default Department;

      

import { Button,Box,Typography} from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';




const ClassRoom = () => {
    return (
        
      <div className=" bg-gray-200 px-3 py-9  w-[100%]  " >
<Box className="items-center flex justify-between mb-3 rounded hover-shadow -lg hover:bg-blue-500 py-2 px-4">
<Typography variant="h5" sx={{ fontWeight: "bold", color: "black"  }}> Add ClassRoom </Typography>
 <Button variant="contained"  sx={{marginLeft:"500px"}}>  Delete</Button> </Box>
 <div className="bg-white px-5 py-10 rounded-1xl border-2 border-white w-[95%] h-9px mx-auto mt-5 " > 
            <div style={{marginTop:"30px"}}>
            <h1 style={{marginLeft:"10px"}}>Class ID</h1>
            <TextField id="outlined-basic" label="" variant="outlined" sx={{width:"950px", marginTop:"10px", marginLeft:"15px","& .MuiOutlinedInput-root": {
            borderRadius: 4 }}} />
  </div>
  
 <div className="mt-16 p-2" >
            
            <h1>Capacity</h1>
            <TextField id="outlined-basic" label="" variant="outlined" sx={{width:"950px", marginTop:"8px","& .MuiOutlinedInput-root": {
            borderRadius: 4 }}}  />
            
  </div>
      <div className="mt-16 p-2">
           
            <h1>Departments</h1>
            <TextField id="outlined-basic" label="" variant="outlined" sx={{width:"950px", marginTop:"8px","& .MuiOutlinedInput-root": {
            borderRadius: 4 }}} />
      </div>
      <Button variant="contained" sx={{marginLeft:"445px" , marginTop:"45px"}}>Submit</Button> 
         
</div>
      </div>

    )
}
export default ClassRoom;

      

import { Button,Box,Typography} from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';



const Course = () => {
    return (
        
       
<div className=" bg-gray-200 px-3 py-9  w-[100%]  " >
<Box className="items-center flex justify-between mb-3 rounded hover-shadow -lg hover:bg-blue-500 py-2 px-4">
<Typography variant="h5" sx={{ fontWeight: "bold", color: "black"  }}> Add Course </Typography>
 <Button variant="contained"  sx={{marginLeft:"500px"}}>  Delete</Button> </Box>
 <div className="bg-white px-5 py-10 rounded-1xl border-2 border-white w-[95%] h-9px mx-auto mt-5 " > 
    
   
            <div style={{marginTop:"30px"}}>
            <h1 style={{marginLeft:"10px"}}>Course ID</h1>
            <TextField id="outlined-basic" label="Course Id" variant="outlined" sx={{width:"950px", marginTop:"10px", marginLeft:"15px", "& .MuiOutlinedInput-root": {
         borderRadius: 4}}} />
  </div>
  
 <div className="mt-16 p-2" >
            
            <h1>Courses Name</h1>
            <TextField id="outlined-basic" label="Course Name" variant="outlined" sx={{width:"950px", marginTop:"8px", "& .MuiOutlinedInput-root": {
            borderRadius: 4 }}} />
            
  </div>
      <div className="mt-16 p-2">
           
            <h1>Teacher Name</h1>
            <TextField id="outlined-basic" label="Teacher Name" variant="outlined" sx={{width:"950px", marginTop:"8px" ,"& .MuiOutlinedInput-root": {
            borderRadius: 4 }}} />
      </div>

      <div className="mt-16 p-2">
           
           <h1>Capacity</h1>
           <TextField id="outlined-basic" label="Capacity" variant="outlined" sx={{width:"950px", marginTop:"8px","& .MuiOutlinedInput-root": {
            borderRadius: 4 }}} />
     </div>
     <Button variant="contained" sx={{marginLeft:"445px" , marginTop:"45px"}}>Submit</Button> 
       </div>
</div>
        
    )
}
export default Course;

import { Button,Box,Typography} from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';



const ClassTiming = () => {
    return (
        
           
      <div className=" bg-gray-200 px-3 py-9  w-[100%]  " >
      <Box className="items-center flex justify-between mb-3 rounded hover-shadow -lg hover:bg-blue-500 py-2 px-4">
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "black"  }}> Add ClassTiming </Typography>
       <Button variant="contained"  sx={{marginLeft:"500px"}}>  Delete</Button> </Box>
       <div className="bg-white px-5 py-10 rounded-1xl border-2 border-white w-[95%] h-9px mx-auto mt-5 " > 
    
        
   
            <div style={{marginTop:"30px"}}>
            <h1 style={{marginLeft:"10px"}}>Class RoomID</h1>
            <TextField id="outlined-basic" label="Class RoomID" variant="outlined" sx={{width:"950px", marginTop:"10px", marginLeft:"15px","& .MuiOutlinedInput-root": {
            borderRadius: 4 }}} />
  </div>
  
 <div className="mt-16 p-2" >
            
            <h1>Teacher Name</h1>
            <TextField id="outlined-basic" label="Teacher Name" variant="outlined" sx={{width:"950px", marginTop:"8px","& .MuiOutlinedInput-root": {
            borderRadius: 4 }}} />
            
  </div>
      <div className="mt-16 p-2">
           
            <h1>Timing</h1>
            <TextField id="outlined-basic" label="Timing" variant="outlined" sx={{width:"950px", marginTop:"8px","& .MuiOutlinedInput-root": {
            borderRadius: 4 }}}  />
      </div>

      <div className="mt-16 p-2">
           
           <h1>Days of Week</h1>
           <TextField id="outlined-basic" label="Days of Week" variant="outlined" sx={{width:"950px", marginTop:"8px","& .MuiOutlinedInput-root": {
            borderRadius: 4 }}}  />
     </div>

     <div className="mt-16 p-2">
           
           <h1>Departments</h1>
           <TextField id="outlined-basic" label="Departments" variant="outlined" sx={{width:"950px", marginTop:"8px","& .MuiOutlinedInput-root": {
            borderRadius: 4 }}} />
     </div>
     <Button variant="contained" sx={{marginLeft:"445px" , marginTop:"45px"}}>Submit</Button> 
  </div>       
</div>
        
    )
}
export default ClassTiming;

import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard"); // Change to the route you want
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <img
        src="/logo.png" // replace with your logo path
        alt="Logo"
        className="w-32 h-32 mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">Welcome to Timetable Genie</h1>
      <button
        onClick={handleGetStarted}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default HomePage;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard"; // This is your next page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <h1 className="text-2xl font-semibold">Welcome to the Dashboard!</h1>
    </div>
  );
};

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind or your CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





      




      
          
      
      
            
      
      