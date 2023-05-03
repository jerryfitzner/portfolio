import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects() {
  return(
    <Grid2 container spacing={3} minHeight={410}>
      {projectData.map((proj) => (
        <Grid2 item xs={12} sm={6} display='flex' justifyContent='center' alignItems='center'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Video</Button>
            <Button size="small">Demo</Button>
          </CardActions>
        </Card>
      </Grid2>
      ))}
      {/* <Grid2 item xs={12} sm={6} display='flex' justifyContent='center' alignItems='center'>
        
      </Grid2> */}
    </Grid2>
  )
};

const projectData = [
  {
    image: '',
    title: 'Title',
    description: 'This is the description.',
    video: '',
    demo: ''
  }
]

