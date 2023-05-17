import CSS from '../Icons/css3-original-wordmark.svg';
import HTML from '../Icons/html5-original-wordmark.svg';
import JSCRIPT from '../Icons/javascript-plain.svg';
import RAILS from '../Icons/rails-plain-wordmark.svg';
import REACTLOGO from '../Icons/react-original-wordmark.svg';
import RUBY from '../Icons/ruby-plain-wordmark.svg';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Avatar } from '@mui/material';

export default function CodeIcons() {
  console.log({CSS})
  return(
    <Grid2 container spacing={3} minHeight={410}>
      <Grid2 item xs={12} sm={2} display='flex' justifyContent='center' alignItems='center'>
        <Avatar 
          alt="Jerry Fitzner" 
          src={CSS}
          sm={4}
          sx={{
            width: {
              xs: 250,
              sm: 350
            },
            height: {
              xs: 250,
              sm: 350
            },
          }}
        />
      </Grid2>
      <Grid2 item xs={12} sm={2} display='flex' justifyContent='center' alignItems='center'>
        <Avatar 
          alt="Jerry Fitzner" 
          src={HTML}
          sm={4}
          sx={{
            width: {
              xs: 250,
              sm: 350
            },
            height: {
              xs: 250,
              sm: 350
            },
          }}
        />
      </Grid2>
      <Grid2 item xs={12} sm={2} display='flex' justifyContent='center' alignItems='center'>
        <Avatar 
          alt="Jerry Fitzner" 
          src={JSCRIPT}
          sm={4}
          sx={{
            width: {
              xs: 250,
              sm: 350
            },
            height: {
              xs: 250,
              sm: 350
            },
          }}
        />
      </Grid2>
      <Grid2 item xs={12} sm={2} display='flex' justifyContent='center' alignItems='center'>
        <Avatar 
          alt="Jerry Fitzner" 
          src={RAILS}
          sm={4}
          sx={{
            width: {
              xs: 250,
              sm: 350
            },
            height: {
              xs: 250,
              sm: 350
            },
          }}
        />
      </Grid2>
      <Grid2 item xs={12} sm={2} display='flex' justifyContent='center' alignItems='center'>
        <Avatar 
          alt="Jerry Fitzner" 
          src={REACTLOGO}
          sm={4}
          sx={{
            width: {
              xs: 250,
              sm: 350
            },
            height: {
              xs: 250,
              sm: 350
            },
          }}
        />
      </Grid2>
      <Grid2 item xs={12} sm={2} display='flex' justifyContent='center' alignItems='center'>
        <Avatar 
          alt="Jerry Fitzner" 
          src={RUBY}
          sm={4}
          sx={{
            width: {
              xs: 250,
              sm: 350
            },
            height: {
              xs: 250,
              sm: 350
            },
          }}
        />
      </Grid2>
    </Grid2>
  )
};