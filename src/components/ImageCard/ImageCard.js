import React, { Component } from 'react';
import "./ImageCard.css";
import Images from '../../images.json';


class ImageCard extends Component {

	state={
    counter: 0,
    array: [],
    srcArray: [],
    topScore: 0
  };

	checkArray = (id) => {

		let check2 = 0;

		console.log('check array func runs');

// for loop doesnt run if array is empty (first try)
		for (let i = 0; i < this.state.array.length; i++) {

			if (this.state.array[i] === id) {
				if (this.state.counter > this.state.topScore) {
					this.setState({
						topScore: this.state.counter
					})
				};
				this.setState({
					counter: 0,
					array: [],
				});
				check2 = check2 + 1;
				console.log('new counter: ' + this.state.counter)
			}
		};

		if (check2 === 0) {
			console.log('check2 runs')
			this.setState({
				counter: this.state.counter + 1
			}, 
				function() {
					this.state.array.push(id);
					console.log("Counter: " + this.state.counter);
					console.log("Array: " + this.state.array);
					// this.randomize();
				}
			);
		}
	};

	handleClick = (id) => {
		console.log("id: " + id);
		// onclick push id into state
		// if array contains two of id, then delete last value in array and reset counter
		this.checkArray(id);
	};

	componentWillMount = () => {
		const srcArray = this.state.srcArray;
		Images.map((item) => {
			srcArray.push({
				id: item.id,
				link: item.link
			});
		});
	};

	shouldComponentUpdate = () => {
		this.randomize();
		this.sendScoresToParent();
		return true;
	};

	randomize = () => {
		const srcArray = this.state.srcArray;
		srcArray.sort(function(a, b) {
			return 0.5 - Math.random();
		});
	};

	sendScoresToParent = () => {
		let counter = this.state.counter;
		let topScore = this.state.topScore;
		this.props.parentCallback(counter, topScore);
	};

	render() {
		return (
			<div id="allImages">
				<p>
					Counter: {this.state.counter}
					topScore: {this.state.topScore}
				</p>
				{this.state.srcArray.map((item) => (
					<div className='image-div' id ={item.id} key={item.id}>
						<img 
							className="images"
							onClick= {() => this.handleClick(item.id)}
							id ={item.id}
							key={item.id} 
							src={item.link} 
						/>
					</div>
				))}

			</div>
		)
	}
}

export default ImageCard;