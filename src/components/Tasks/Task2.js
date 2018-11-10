import React, { Component } from 'react';

class Task2 extends Component {

constructor(){
  super();
  this.state={
    itemCount:''
  }
}

componentDidMount(){
let data = [];
fetch('http://interview.mapsted.com/RnD/test-analytics.json')
.then(response=>response.json())
.then(data=>{
	this.purchaseNumber(data)
})
.catch(err=>console.log('task 2',err))
}


purchaseNumber=(data)=>{
	let count = 0;
  	const array = data.map((num,i)=>{
    	return(num.usage_statistics.session_infos.map((num,i)=>{
    		return(num.purchases.map((num,i)=>{
    			if(num.item_id === 47)
    			{
    				count = count+1
    			}
    		}))
    	}))
    })
   
   	this.setState({itemCount:count})
	return true;
}




  render() {
    return (
      <div className="">
        <p>Total Number of times item with id = 47 was purchased is <span>{this.state.itemCount}</span></p> 
      </div>
    );
  }
}

export default Task2;
