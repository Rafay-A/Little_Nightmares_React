import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Container from '@material-ui/core/Container';
import SimpleCard from './components/Card/Card';
import Aboutus from './components/Aboutus/Aboutus';
import Whatwedo from './components/Whatwedo/Whatwedo';

function App() {
  return (
      <div className="App">
        <div style={{ 'paddingTop':'0px' }}>
          <Navbar />
          <div className='Header'>
            <SimpleCard/>
          </div>
        <Container fixed>
          <div id='aboutus' className='AboutUs'>
            <h2 style={{'color':'white'}}>ABOUT US</h2>
            <hr/>
            <Aboutus></Aboutus>
          </div>
          <div id='whatwedo' className='WhatWeDo'>
          <h2 style={{'color':'white'}}>WHAT WE DO</h2>
          <hr/>
          <div style={{ 'textAlign':'center'}}>
            <h3 style={{'color':'white'}}>We Bring Your Nightmares Into Reality!</h3>
          </div>
            <Whatwedo></Whatwedo>
          </div>
        </Container>
        </div>
      </div>

  );
}

export default App;
