import * as React from 'react';
import Button from '@mui/material/Button';
import { AccessTime } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
            backgroundColor: "blue"
          }
        },
        {
          props: {
            variant: "body3",
          }, 
          style: {
            fontsize: 9,
          },
        },
      ],
    },
  },
});

export default function Demo() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AccessTime />
        <Button variant="contained">Hello World</Button>
      </ThemeProvider>
    </div>
  );
}