import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import {getList ,getContent} from './Service';
import { Box, Container } from '@mui/system';
import { Card, Grid, Typography } from '@mui/material';

export default function BasicTable() {

    const [userlist, setUserlist] = useState([]);
  const [userBody, setUserBody] = useState();

  useEffect(() => {
    getList()
      .then((response) => {
        setUserlist(response.data);
      })
      
  }, []);

  const handleClick = (id) => {
    console.log("id", id);
    getContent(id)
      .then((response) => {
        console.log(response.data);
        setUserBody(response.data);
      })
    
  };
  return (
    <React.Fragment>
        <Container fixed>
            <Box sx={{ height: '100vh', display: 'flex' }}>
                <Grid container columnSpacing={3}>
                    <Grid item xs={9} sx={{height:'100vh'}}>
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
                <button key={row.id} onClick={()=>handleClick(row.id)}>show content of:{row.id}</button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item xs={3} sx={{height:'100%'} } >
      <Card >
   {userBody !== undefined &&
   <Typography textAlign={"center"} sx={{p:10}}>
    BodyContent:{userBody.body}
   </Typography>
}
</Card>
    </Grid>
    </Grid>
    
    </Box>
    </Container>
    </React.Fragment>
  );
}