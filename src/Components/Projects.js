import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ProjectCard from "./ProjectCard";
import SFcoverimage from "../SF.coverimage.png";
import ICAcoverimage from "../ICA.coverimage.png";



export default function Projects() {
  return(
    <Grid2 container spacing={3} minHeight={410} paddingTop={5} paddingBottom={20}>
      {projectData.map((proj, index) => (
        <ProjectCard key={index} proj={proj} />
      ))}
    </Grid2>
  )
};

const projectData = [
  {
    image: `${ICAcoverimage}`,
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
    image: `${SFcoverimage}`,
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

