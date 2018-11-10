import React, { Component } from 'react';
import cross from './cross.png';



class Taskoptions extends Component{
	render(){
		return(
			<div className='frm mt5 w-40 flex justify-around pa4-m pa4-l pa2 mh3 mb3 bw3 br3 shadow-5'>
	            <select className='w-80 pv3 ph1 ma2 ba b--black bw1 fw6 f6'>
	            	<option default>Select an option from the list:</option>
	                <option onClick={()=>this.props.onDisplay('task1')}>Samsung manufacture devices total purchase cost : </option>
	                <option onClick={()=>this.props.onDisplay('task2')}>Number of times item with id=47 purchased :</option>
	                <option onClick={()=>this.props.onDisplay('task3')}>Purchase cost for items with category_id = 7 :</option>
	                <option onClick={()=>this.props.onDisplay('task4')}>Total Purchase cost in Ontario :</option>
	                <option onClick={()=>this.props.onDisplay('task5')}>Total Purchase cost in United States :</option>
	            </select>
	            <span className='pv3 pv2 ph3 ma2 ba b--black bw1 bg-white grow pointer fw6 f6 dib link' 
				onClick={this.props.onInitialStageClick}><img src={cross} alt='' /></span>
	        </div>
	    )
	}
}

export default Taskoptions;

