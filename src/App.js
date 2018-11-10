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
constructor(props){
    super(props);
    this.state= initialState
  }

componentDidMount(){
fetch('http://interview.mapsted.com/RnD/test-analytics.json')
.then(response=>response.json())
.then(data=>this.setState({data:data}))
.catch(err=>console.log('task 1',err))
}


onTask1=()=>{
const data = this.state.data.filter(num=>{
      return(num.manufacturer === 'Samsung' )
    })
 this.totalCost(data)
}

totalCost=(data)=>{         //task1
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

purchaseNumber=(data)=>{      //task2
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

purchaseCost=(data)=>{
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
  this.setState({purchaseCost:cost})
  return true;
}


onDisplay=(task_number)=>{
  if(task_number === 'task1'){
    this.onTask1()
  }
  else if(task_number === 'task2'){
    this.purchaseNumber(this.state.data)
  }
  else if(task_number === 'task3'){
    this.purchaseCost(this.state.data)
  }
  this.setState({isTask: task_number})  //Selecting which task to render
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
