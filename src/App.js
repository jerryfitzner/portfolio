// import logo from './Jerry.Fitzner2.png';
import './App.css';
// import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
// import Demo from './Demo';
import { Container } from '@mui/material';
import ResponsiveAppBar from './Components/Navbar';
import Projects from './Components/Projects';
import ContactForm from './Components/ContactForm';





function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container sx={{marginY: 5}}>
        {/* <Demo /> */}
      {/* <Navbar /> */}
        <Profile /> 
        <Projects />
        <ContactForm />
      </Container>
    </div>
  );
}

export default App;
