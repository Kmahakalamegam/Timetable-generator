import React from 'react';
import { Button, TextField,InputAdornment } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom'



function createData(UID, Name, Department) {
  return { UID, Name, Department };
}
const rows = [
  createData(142, 'Muthu Selvi', 'CSE'),
  createData(144, 'Jesiya', 'ECE'),
  createData(146, 'Suresh', 'EEE'),
 
];

export default function DenseAppBar() {
const navigate= useNavigate();
  return (

    <div className="p-4">
      <div className="flex justify-end">
      <Button 
  variant="contained" 
  sx={{ borderRadius: "10px" }} 
  onClick={() => navigate('/addteacher')}
>
  Add Teachers
</Button>

      </div>
      <div className="mt-6 w-3/4 mx-auto">

<Box sx={{ display: "flex", alignItems: "center", marginTop: "10px", marginLeft: "15px" }}>
  <TextField id="outlined-basic" label="Search" variant="outlined"sx={{
      width: "600px",
      "& .MuiOutlinedInput-root": {
        borderRadius: 4,
      },
    }}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton edge="end" color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
</Box>
      </div>
      <TableContainer component={Paper} className="mt-9 w-3/4 mx-auto">
        <Table sx={{ maxWidth: 1500 }} aria-label="teachers table">
          <TableHead>
            <TableRow>
              <TableCell align="left"><strong>UID</strong></TableCell>
              <TableCell align="left"><strong>Name</strong></TableCell>
              <TableCell align="left"><strong>Department</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.UID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{row.UID}</TableCell>
                <TableCell align="left">{row.Name}</TableCell>
                <TableCell align="left">{row.Department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
