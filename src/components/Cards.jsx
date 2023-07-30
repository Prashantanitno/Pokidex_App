import * as React from 'react';
import { Box, Typography } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './PokeCard';



export default function Cards({pokeInfo}) {
   
    

  return (
      <Box  className="card_container">
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
      {pokeInfo.map((curVal, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}>
            <Card myData={curVal} />
        </Grid>
      ))}
    </Grid>
      </Box>
  );
}
