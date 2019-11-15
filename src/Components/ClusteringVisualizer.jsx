import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';

class ClusteringVisualizer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x: 30, // x: 0 range: (30, width-10)
			y: 32, // y: 10 range: (height-30, 32)
			type: 'scatter',
			data: {
				datasets: [{
					label: 'Scatter Dataset',
					data: [{
						x: 1,
						y: 1
					}, {
						x: 2,
						y: 2
					}, {
						x: 3,
						y: 3
					}]
				}]
			},
			options: {
				scales: {
					xAxes: [{
						ticks: {
							min: 0,
							max: 10
						}
					}],
					yAxes: [{
						ticks: {
							min: 0,
							max: 10
						}
					}]
				}
			}
		};

		this.add = true;
		this.chartReference = {};
		this.onMouseClick = this.onMouseClick.bind(this);
	}

	componentDidMount() {
		console.log(this.chartReference);
	}

	onMouseClick(e) {
		//this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
		//console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
		if (this.add) {
			this.addData('Scatter Dataset', { x: 1, y: 10 });
			console.log("add");
			this.add = true;
		}
	}

	addData(label, data) {
		const chart = this.chartReference.chartInstance;
		chart.data.labels.push(label);
		chart.data.datasets.forEach((dataset) => {
			dataset.data.push(data);
		});
		chart.update();
	}

	removeData(elems) {
		if (elems[0] === undefined) {
			console.log("nothing there");
			this.add = true;
		} else {
			const index = elems[0]._index;
			console.log(index);
			const chart = this.chartReference.chartInstance;
			chart.data.datasets[0].data.splice(index, 1); // 0 default until i add example datasets
			chart.update();
			this.add = false;
		}
	}

	render() {
		return (
			<div className='chart' onClick={this.add ? this.onMouseClick : undefined} >
				<Scatter ref={(reference) => this.chartReference = reference} data={this.state.data} options={this.state.options} onElementsClick={(elems) => { this.removeData(elems); }} />
			</div>
		);
	}
}

export default ClusteringVisualizer;
