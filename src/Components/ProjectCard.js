import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard({proj}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  return(
    <Grid2 item xs={12} sm={6} display='flex' justifyContent='center' alignItems='center'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={proj.image}
            title={proj.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {proj.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontStyle: 'italic'}}>
                {proj.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={proj.video}>Video</Button>
            <Button size="small" href={proj.demo}>Demo</Button>
            <Button size="small" href={proj.github1}>Github</Button>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {proj.bullets.map((bullet) => (
                <Typography variant="body2" color="text.secondary">
                  - {bullet}
                </Typography>
              ))}
            </CardContent>
          </Collapse>
        </Card>
      </Grid2>
  )
};