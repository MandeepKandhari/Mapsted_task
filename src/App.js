import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js'; //Particles.js library fro rendering paricle background
import Taskoptions from './components/Taskoptions/Taskoptions';
import Taskdisplay from './components/Taskdisplay/Taskdisplay';
import 'tachyons';     //CSS Toolkit Library 

const particlesOptions={     // Defining the options for the particles library to be given as props
  particles: {
    number:{
      value:80,
      density:{
      enable:true,
      value_area:900
      }  
    }
  }
}

const initialState = {
  isTask:'',
  data:[],
  cost:'',
  itemCount:'',
  purchaseCost:''
}


class App extends Component {
constructor(){
    super();
    this.state= initialState
  }

componentDidMount(){
fetch('http://interview.mapsted.com/RnD/test-analytics.json')
.then(response=>response.json())
.then(data=>this.setState({data:data}))
.catch(err=>console.log('task 1',err))
}


onTask1=()=>{
const filteredArray = this.state.data.filter(num=>{       //filtering the analytics.json to get the data related to the Samsung manufacturers
      return(num.manufacturer === 'Samsung' )
    })
 this.totalSamsungDeviceCost(filteredArray)
}

totalSamsungDeviceCost=(filteredArray)=>{         //task1
  let totalDeviceCost = 0;
  const array = filteredArray.map((num,i)=>{       // looping through the filtered array to get the cost of each samsung manufactured devices
    return(num.usage_statistics.session_infos.map((nums,i)=>{
      return(nums.purchases.map(num=>{
        totalDeviceCost = totalDeviceCost + num.cost
        })
      )
    })
  )
})
let deviceCost = totalDeviceCost.toFixed(2)
this.setState({cost:deviceCost})
return(deviceCost)
}

idPurchaseCount=(itemIdArray)=>{      //task2
  let count = 0;
    const array = itemIdArray.map((num,i)=>{                      //looping through the array to count the number of items with id = 47
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

categoryPurchaseCost=(data)=>{      //task3
  let categoryPurchaseCost = 0;
    const array = data.map((num,i)=>{
      return(num.usage_statistics.session_infos.map((num,i)=>{
        return(num.purchases.map((num,i)=>{
          if(num.item_category_id ===7){
            categoryPurchaseCost = categoryPurchaseCost + num.cost
          } 
        }))
      }))
    })
  let totalCategorycost = categoryPurchaseCost.toFixed(2)
  this.setState({purchaseCost:totalCategorycost})
  return true;
}


onDisplay=(task_number)=>{
  if(task_number === 'task1'){
    this.onTask1()
  }
  else if(task_number === 'task2'){
    this.idPurchaseCount(this.state.data)
  }
  else if(task_number === 'task3'){
    this.categoryPurchaseCost(this.state.data)
  }
  this.setState({isTask: task_number})  //Selecting which task to render between task1 to task5
}

onInitialStageClick = ()=>{       //Initializing the webpage
  this.setState(initialState)
}


  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
          <div className='w-80 center'>
            <h1 className='mt3 pv3 navbackground'>Mapsted Corporation Interview Task</h1>
          </div> 
          <Taskoptions 
          onDisplay={this.onDisplay}
          onInitialStageClick={this.onInitialStageClick}
          />
          <Taskdisplay 
          data={this.state.data}
          isTask={this.state.isTask}
          cost={this.state.cost}
          itemCount={this.state.itemCount}
          purchaseCost={this.state.purchaseCost}
          />
        </div>
    );
  }
}

export default App;
