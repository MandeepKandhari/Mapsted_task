import React, { Component } from 'react';
import Task1 from '../Tasks/Task1';
import Task2 from '../Tasks/Task2';
import Task3 from '../Tasks/Task3';
import Task4 from '../Tasks/Task4';
import Task5 from '../Tasks/Task5';
import Task6 from '../Tasks/Task6';


class Taskdisplay extends Component{
	render(){
		return(
			<div>										
				{this.props.isTask === 'task1' 					//using tertiary operator to decide which component to render based on the isTask props value
				?<Task1 />
				:(this.props.isTask === 'task2'
					?<Task2 />
					:(this.props.isTask === 'task3'
						?<Task3 />
						:(this.props.isTask === 'task4'
							?<Task4 />
							:(this.props.isTask === 'task5'
								?<Task5 />
								:null
				))))
			}
			</div>
		)
	}
}
export default Taskdisplay;

        
        
        
        