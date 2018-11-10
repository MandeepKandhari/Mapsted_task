import React, { Component } from 'react';


class Task1 extends Component {


render() {
    return (
      <div className="flex flex-wrap justify-center">
      	<p className='w-80 ph2'>Total Purchase cost for Samsung manufacture Devices</p>
        <p className='w-80 ph2'>{this.props.cost}</p>  
      </div>
    );
  }
}

export default Task1;
