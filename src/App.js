import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js'; //Particles.js library fro rendering paricle background
import Taskoptions from './components/Taskoptions/Taskoptions';
import Taskdisplay from './components/Taskdisplay/Taskdisplay';
import 'tachyons';     //CSS Toolkit Library 

const particlesOptions={     // Defining the options for the particles library to be given as props
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
constructor(props){
    super(props);
    this.state={
      isTask:'task1'
        
    }
  }

onDisplay=(task_number)=>{
  this.setState({isTask: task_number})
}

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
          <div className='w-80 center'>
            <h1 className='mt3 pv3 navbackground'>Mapsted Corporation Interview Task</h1>
          </div> 
          <Taskoptions onDisplay={this.onDisplay} />
          <Taskdisplay isTask={this.state.isTask}/>
        </div>
    );
  }
}

export default App;
