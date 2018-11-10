import React, { Component } from 'react';

class Task3 extends Component {
  render() {
    return (
      <div className="flex flex-wrap justify-center">
        <p className='w-80 ph2'>Total Purchase costs for item's in the category_id 7 :</p>
        <p className='w-80 ph2'>{this.props.purchaseCost}</p> 
      </div>
    );
  }
}

export default Task3;
