import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';
import Task6 from './Task6';
import 'tachyons';

const particlesOptions={
  
                particles: {
                  number:{
                    value:80,
                    density:{
                    enable:true,
                    value_area:900
                    
                  }
                }
              }
            }









class App extends Component {



  render() {
    return (
      <div className="App">
        <p>Hello world!</p>
        <Particles className='particles' params={particlesOptions} />
        <Task1 />
        <Task2 />
        <Task3 />
        <Task4 />
        <Task5 />
        <Task6 />
      </div>
    );
  }
}

export default App;
