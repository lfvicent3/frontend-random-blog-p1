import React, {useState} from 'react';

import { AppBar, Typography, Toolbar, Card, CardContent, Grid, CircularProgress} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

import './styles.css';

const StyledAppBar = withStyles({
    root: {
        background: '#414141',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        alignItems: 'center'
      },
})(AppBar);

const StyledCard = withStyles({
  root: {
    backgroundColor: '#414141'
  }
})(Card);

const StyledTypography = withStyles({
  root: {
    color: '#ffffff'
  }
})(Typography);

const StyledTypography2 = withStyles({
  root: {
    color: '#d4d4d4'
  }
})(Typography);

const StyledCircularProgress = withStyles({
  root: {
    color: '#ffffff',
    margin: 'auto',
  }
})(CircularProgress);

export default function Inicio() {
  const [dados, setDados] = useState([]);

  fetch('https://random-blog-p1.herokuapp.com/api/post/all')
  .then((res) => res.json())
  .then((data) => setDados(data.data))
  .catch(e => console.log(e));

  return (
    <div>
      <header>
      <StyledAppBar>
         <Toolbar>
         <Typography variant="h6" >
            Random Blog 
          </Typography>
         </Toolbar>
       </StyledAppBar>
      </header>
      <Toolbar />
      <Grid container spacing={1}>
      {
          dados.length > 0 ? dados.map((e)=> (
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <CardContent>
                  <StyledTypography gutterBottom variant="h5" component="h2">
                    {e.title}
                  </StyledTypography>
                  <StyledTypography2 variant="body2" color="textSecondary" component="p">
                    {e.paragraph}
                 </StyledTypography2>
                </CardContent>
              </StyledCard>
            </Grid>    
          )): <StyledCircularProgress></StyledCircularProgress>
          }
      </Grid>
        
    </div>
  );
}