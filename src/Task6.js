import React, { Component } from 'react';

class Task6 extends Component {
constructor(){
  super();
  this.state={
    data:[],
    highestPurchaseCost:'',
    totalState:[]
  }
}

componentDidMount(){
let data = [];
fetch('http://interview.mapsted.com/RnD/test-analytics.json')
.then(response=>response.json())
.then(data=>{
 	this.highestPurchaseCost(data)
 })
.catch(err=>console.log('task 5',err))
}


highestPurchaseCost=(data)=>{
	let count = 0;
	let buildingId = 0;
  	const array = data.map((num,i)=>{
    	return(num.usage_statistics.session_infos.map((num,i)=>{
    		buildingId = num.building_id;
    		return(num.purchases.map((num,i)=>{
    		let total = {
      			building_id:buildingId,
      			cost:num.cost
      		}
      		return(total)
      		}))
      	}))
    })
    
    console.log(array)
  	const purchaseCostArray = array.map((num,i)=>{
  		console.log(num)
  	})




  	this.setState({highestPurchaseCost:count})
	return true;	
}

render() {
    return (
      <div className="">
      {console.log(this.state.totalState)}
        <p>Total Purchase cost in United States <span>{this.state.highestPurchaseCost}</span></p> 
      </div>
    );
  }
}

export default Task6;