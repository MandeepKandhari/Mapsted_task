import React, { Component } from 'react';

class Task5 extends Component {
constructor(){
  super();
  this.state={
    data:[],
    totalPurchaseCost:''
  }
}

componentDidMount(){
let data = [];
fetch('http://interview.mapsted.com/RnD/test-buildings.json')
.then(response=>response.json())
.then(data=>{
 data = data.filter(num=>{
      return(num.country === 'United States' )
    })

const building_id = data.map(num=>{
		return(num.building_id)
	})
 this.totalPurchaseCost(building_id)
})
.catch(err=>console.log('task 5',err))
}


totalPurchaseCost=(building_id)=>{
let buildings = [];
fetch('http://interview.mapsted.com/RnD/test-analytics.json')
.then(response=>response.json())
.then(products=>{
	let totalPurchaseCost = 0;
	const purchaseCost =building_id.map(id=>{
		products.map((num,i)=>{
		return(num.usage_statistics.session_infos.map((num,i)=>{
			if(num.building_id === id ){
				const building_cost = num.purchases.map(num=>{
					return(num.cost)
				})
				const cost = building_cost.reduce((accumulator, num)=>{
					return(accumulator + num)
				})
			totalPurchaseCost= totalPurchaseCost + cost
					}
				}))
			})
		})
	let totalCost = totalPurchaseCost.toFixed(2);
	this.setState({totalPurchaseCost:totalCost})
	})
	
}

render() {
    return (
      <div className="flex flex-wrap justify-center">
        <p className='w-80 ph2'>Total Purchase cost in United States :</p>
        <p className='w-80 ph2'>{this.state.totalPurchaseCost}</p> 
      </div>
    );
  }
}

export default Task5;
