import React, { Component } from 'react';
import './ClusteringVisualizer.css';
import { Scatter } from 'react-chartjs-2';

class ClusteringVisualizer extends Component {
	chartReference = {};

	MAX_WIDTH = 30;
	MAX_HEIGHT = 30;

	removedPoint = false;

	constructor(props) {
		super(props);
		this.state = {
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
						x: 3.5,
						y: 3
					}, {
						x: 3.6,
						y: 3
					}],
					pointBackgroundColor: 'rgba(0, 0, 255, 1)',
					pointHoverRadius: 5,
					pointRadius: 5
				}]
			},
			options: {
				scales: {
					xAxes: [{
						ticks: {
							min: 0,
							max: this.MAX_WIDTH
						}
					}],
					yAxes: [{
						ticks: {
							min: 0,
							max: this.MAX_HEIGHT
						}
					}]
				}
			}
		};
		this.onMouseClick = this.onMouseClick.bind(this);
	}

	componentDidMount() {
		//console.log(this.chartReference.chartInstance);
	}

	onMouseClick(e) {
		if (!this.removedPoint) {
			const chart = this.chartReference.chartInstance;
			// scale event's x-value to chart's x-value
			const x_offset = chart.chartArea.left;
			const width = chart.chartArea.right - x_offset;
			const x = e.nativeEvent.offsetX - x_offset;
			const chart_x = x / width * this.MAX_WIDTH;
			// scale event's y-value to chart's y-value
			const y_offset = chart.chartArea.top;
			const height = chart.chartArea.bottom - y_offset;
			const y = e.nativeEvent.offsetY - y_offset;
			const chart_y = y / height * this.MAX_HEIGHT;
			this.addData(chart, 'Scatter Dataset', { x: chart_x.toFixed(2), y: (this.MAX_HEIGHT - chart_y).toFixed(2) });
			console.log("added (" + chart_x.toFixed(2) + ", " + (10 - chart_y).toFixed(2) + ")");
		}
	}

	addData(chart, label, data) {
		chart.data.labels.push(label);
		chart.data.datasets.forEach((dataset) => {
			dataset.data.push(data);
		});
		chart.update();
	}

	removeData(elems) {
		if (elems[0] === undefined) {
			console.log("nothing there");
			this.removedPoint = false;
		} else {
			const index = elems[0]._index;
			console.log(index);
			const chart = this.chartReference.chartInstance;
			chart.data.datasets[0].data.splice(index, 1); // 0 default until i add example datasets
			chart.update();
			this.removedPoint = true;
		}
	}

	render() {
		return (
			<div className='chart' onClick={!this.removedPoint ? this.onMouseClick : undefined} >
				<Scatter ref={(reference) => this.chartReference = reference} data={this.state.data} options={this.state.options} onElementsClick={(elems) => { this.removeData(elems); }} />
			</div>
		);
	}
}

export default ClusteringVisualizer;
