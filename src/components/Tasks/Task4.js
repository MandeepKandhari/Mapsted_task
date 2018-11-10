import React, { Component } from 'react';

class Task4 extends Component {
constructor(){
  super();
  this.state={
    totalPurchaseCost:''
  }
}

componentDidMount(){
let buildingData = [];
fetch('http://interview.mapsted.com/RnD/test-buildings.json')			//making the network calls for fetching the building.json information
.then(response=>response.json())
.then(buildingData=>{
 buildingData = buildingData.filter(num=>{
      return(num.state === 'Ontario' )									//filtering the data array to obtain only the data related to Ontario
    })

const building_id = buildingData.map(num=>{
		return(num.building_id)
	})
 this.totalPurchaseCost(building_id)
})
.catch(err=>console.log('task 4',err))
}


totalPurchaseCost=(building_id)=>{
let buildings = [];
	let totalPurchaseCost = 0;
	const purchaseCost =building_id.map(id=>{			//looping through the building.json data
		this.props.data.map((num,i)=>{
		return(num.usage_statistics.session_infos.map((num,i)=>{		
			if(num.building_id === id ){
				const building_cost = num.purchases.map(num=>{
					return(num.cost)
				})
			const cost = building_cost.reduce((accumulator, num)=>{		//reducing the array into a single value by adding all the indexed values 
					return(accumulator + num)
				})
			totalPurchaseCost= totalPurchaseCost + cost
					}
				}))
			})
		})
	let totalCost = totalPurchaseCost.toFixed(2);
	this.setState({totalPurchaseCost:totalCost})
	
}



  render() {
    return (
      <div className="flex flex-wrap justify-center">
        <p className='w-80 ph2'>Total Purchase cost in Ontario :</p>
        <p className='w-80 ph2'>{this.state.totalPurchaseCost}</p> 
      </div>
    );
  }
}

export default Task4;
