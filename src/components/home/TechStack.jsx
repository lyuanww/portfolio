import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from '@mui/material';
import profilepic from "../../assets/profile.jpg";


const TechStack = () => {
  return (
    <div>
      <h3 className="techstack__title">Software Engineer</h3>
      <TableContainer sx={{minWidth: 450 }} component={Paper}>
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table" style={{ borderCollapse: 'collapse' }}>
          <TableBody>
            <TableRow>
              <TableCell style={{ border: 'none' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={profilepic} />
              </TableCell>
              <TableCell style={{ border: 'none' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={profilepic} />
              </TableCell>
              <TableCell style={{ border: 'none' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={profilepic} />
              </TableCell>
              <TableCell style={{ border: 'none' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={profilepic} />
              </TableCell>
              <TableCell style={{ border: 'none' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={profilepic} />
              </TableCell>
              <TableCell style={{ border: 'none' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={profilepic} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: 'none' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={profilepic} />
              </TableCell>
              <TableCell style={{ border: 'none' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={profilepic} />
              </TableCell>
              <TableCell style={{ border: 'none' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={profilepic} />
              </TableCell>
              <TableCell style={{ border: 'none' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={profilepic} />
              </TableCell>
              <TableCell style={{ border: 'none' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={profilepic} />
              </TableCell>
              <TableCell style={{ border: 'none' }}>
                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={profilepic} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TechStack;
