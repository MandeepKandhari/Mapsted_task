import React, { Component } from 'react';



class Taskoptions extends Component{
	render(){
		return(
			<div className='frm mt5 w-40 flex justify-center pa4-m pa4-l pa2 mh3 mb3 grow bw3 br3 shadow-5'>
	            <select className='w-80 category-dropdown pv3 ph1 ma2 ba b--black bw1'>
	                <option onClick={()=>this.props.onDisplay('task1')}>Total Purchase cost for Samsung manufacture Devices</option>
	                <option onClick={()=>this.props.onDisplay('task2')}>Total Number of times item with id = 47 was purchased is</option>
	                <option onClick={()=>this.props.onDisplay('task3')}>Total Purchase costs for item's in the category_id 7 is</option>
	                <option onClick={()=>this.props.onDisplay('task4')}>Total Purchase cost in Ontario</option>
	                <option onClick={()=>this.props.onDisplay('task5')}>Total Purchase cost in United States</option>
	                <option onClick={()=>this.props.onDisplay('task6')}>Total Purchase cost in Ontario</option>
	            </select>
	        </div>
	    )
	}
}

export default Taskoptions;

