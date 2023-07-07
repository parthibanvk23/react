import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import {getList} from './Service';
import { Box, Container } from '@mui/system';
import { Link } from 'react-router-dom';


export default function BasicTable() {

    const [userlist, setUserlist] = useState([]);
  

  useEffect(() => {
    getList()
      .then((response) => {
        setUserlist(response.data);
      })
      
  }, []);

 
  return (
    <React.Fragment>
        <Container fixed>
            <Box sx={{ height: '100vh', display: 'flex' }}>
                
    <TableContainer component={Paper} sx={{ maxHeight: '100vh' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">UserId</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userlist.map((row) => (
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.userId}</TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">
                
              <Link to={`/content/${row.id}`}>
                <button key={row.id} >show content of:{row.id}</button>
                
                </Link>

                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Container>
    </React.Fragment>
  );
}