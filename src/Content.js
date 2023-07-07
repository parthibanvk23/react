import * as React from 'react';
import './App.css';
import { Card, Typography } from '@mui/material';
import { useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import {getContent} from './Service';

export default function BodyContent(props) {

  const { id } = useParams();
  console.log("id",id);
    
    const [userBody, setUserBody] = useState();
    useEffect(() => {
        getContent(id)
          .then((response) => {
            console.log(response.data);
            setUserBody(response.data);
          })
        }, [id]);    
      

    return (
        <div className="App">
             <Card >
   {userBody !== undefined &&
   <Typography textAlign={"center"} sx={{p:10}}>
    BodyContent:{userBody.body}
   </Typography>
}
</Card>
        </div>
    );

}
