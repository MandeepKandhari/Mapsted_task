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
			<article className='w-80 flex flex-column items-center'>
			{this.props.isTask === ''
			?null
			:<section className="br4 fw6 f4 shadow-5 grow mh5 pv4 flex justify-center mv5 w-80 w-60-m w-50-l">										
				{this.props.isTask === 'task1' 					//using tertiary operator to decide which component to render based on the isTask props value
				?<Task1 
				cost={this.props.cost}
				/>
				:(this.props.isTask === 'task2'
					?<Task2 
					itemCount={this.props.itemCount}
					/>
					:(this.props.isTask === 'task3'
						?<Task3
						purchaseCost={this.props.purchaseCost}
						/>
						:(this.props.isTask === 'task4'
							?<Task4 />
							:(this.props.isTask === 'task5'
								?<Task5 />
								:null
				))))
			}
			</section>}
		</article>
		)
	}
}
export default Taskdisplay;

        
        
        
        