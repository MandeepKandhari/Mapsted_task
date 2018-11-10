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
let countryData = [];
fetch('http://interview.mapsted.com/RnD/test-buildings.json')		//looping through the building.json data
.then(response=>response.json())
.then(countryData=>{
 countryData = countryData.filter(num=>{
      return(num.country === 'United States' )
    })

const building_id = countryData.map(num=>{
		return(num.building_id)
	})
 this.countryTotalPurchaseCost(building_id)
})
.catch(err=>console.log('task 5',err))
}


countryTotalPurchaseCost=(building_id)=>{
let buildings = [];
	let countryTotalPurchaseCost = 0;
	const purchaseCost =building_id.map(id=>{
		this.props.data.map((num,i)=>{
		return(num.usage_statistics.session_infos.map((num,i)=>{
			if(num.building_id === id ){
				const building_cost = num.purchases.map(num=>{
					return(num.cost)
				})
				const cost = building_cost.reduce((accumulator, num)=>{
					return(accumulator + num)
				})
			countryTotalPurchaseCost= countryTotalPurchaseCost + cost
					}
				}))
			})
		})
	let totalCost = countryTotalPurchaseCost.toFixed(2);
	this.setState({totalPurchaseCost:totalCost})
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
