import React, { Component } from 'react';

class Task2 extends Component {
  render() {
    return (
      <div className="flex flex-wrap justify-center">
        <p className='w-80 ph2'>Total Number of times item with id = 47 was purchased :</p>
        <p className='w-80 ph2'>{this.props.itemCount}</p> 
      </div>
    );
  }
}

export default Task2;
