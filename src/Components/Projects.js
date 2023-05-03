import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
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

export default function Projects() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return(
    <Grid2 container spacing={3} minHeight={410}>
      {projectData.map((proj) => (
        <Grid2 item xs={12} sm={6} display='flex' justifyContent='center' alignItems='center'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
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
            <Button size="small">Video</Button>
            <Button size="small">Demo</Button>
            <Button size="small">Github</Button>
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
      ))}
    </Grid2>
  )
};

const projectData = [
  {
    image: '',
    title: 'Incident Command App',
    description: 'An app that allows an emergency commander to keep track of emergency incidents, and resources allocated.',
    bullets: [
      'Implemented encrypted password storage through the ‘bcrypt’ gem in rails.',
      'Maintained state utilizing Redux.',
      'Developed a full stack application utilizing REACT on the front end and Rails on the backend.',
      'Utilized Rails to create a functioning API with custom and RESTful routes.'
    ],
    video: 'https://youtu.be/A_xAV2Jx0zs',
    demo: '',
    github1: 'https://github.com/jerryfitzner/incident-command',
    github2: ''
  },{
    image: '',
    title: 'Student Fundraising App',
    description: 'An app that allows a youth leader/teacher to keep track of the fundraising efforts of their students and donors.',
    bullets: [
      'Utilized REACT with Sinatra to build a full stack web-based application.',
      'Created custom routes to implement full C.R.U.D. on the backend.',
      'Implemented state to maintain various functionality of the application.'
    ],
    video: 'https://youtu.be/kVg8fz3EWW8',
    demo: '',
    github1: 'https://github.com/jerryfitzner/phase-3-project-frontend',
    github2: 'https://github.com/jerryfitzner/phase-3-sinatra-react-project'
  }
]

