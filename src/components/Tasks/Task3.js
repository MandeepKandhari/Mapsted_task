import React, { Component } from 'react';

class Task3 extends Component {
constructor(){
  super();
  this.state={
    itemCost:''
  }
}

componentDidMount(){
let data = [];
fetch('http://interview.mapsted.com/RnD/test-analytics.json')
.then(response=>response.json())
.then(data=>{
	this.purchaseCost(data)
})
.catch(err=>console.log('task 3',err))
}


purchaseCost=(data)=>{
	let count = 0;
	let totalCost = 0;
  	const array = data.map((num,i)=>{
    	return(num.usage_statistics.session_infos.map((num,i)=>{
    		return(num.purchases.map((num,i)=>{
    			if(num.item_category_id ===7){
    				totalCost = totalCost + num.cost
    			}	
    		}))
    	}))
    })
   let cost = totalCost.toFixed(2)
   this.setState({itemCost:cost})
   return true;

}


  render() {
    return (
      <div className="">
        <p>Total Purchase costs for item's in the category_id 7 is <span className='pl3'>{this.state.itemCost}</span></p> 
      </div>
    );
  }
}

export default Task3;
