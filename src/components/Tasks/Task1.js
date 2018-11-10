import React, { Component } from 'react';


class Task1 extends Component {
constructor(){
  super();
  this.state={
    data:[],
    cost:''
  }
}

componentDidMount(){
let data = [];
fetch('http://interview.mapsted.com/RnD/test-analytics.json')
.then(response=>response.json())
.then(data=>{
 data = data.filter(num=>{
      return(num.manufacturer === 'Samsung' )
    })
 this.totalCost(data)
})
.catch(err=>console.log('task 1',err))
}


totalCost=(data)=>{
  let totalCost = 0;
  let totalCostArray = [];
  let purchasesObject = {};
  const array = data.map((num,i)=>{
    return(num.usage_statistics.session_infos.map((nums,i)=>{
      return(nums.purchases.map(num=>{
      	totalCost = totalCost + num.cost
      })
    )
  })
  )
})
let cost = totalCost.toFixed(2)
this.setState({cost:cost})
return(cost)
}



render() {
    return (
      <div className="">
      	<p>Total Purchase cost for Samsung manufacture Devices<span className='pl3'>{this.state.cost}</span></p>  
      </div>
    );
  }
}

export default Task1;
