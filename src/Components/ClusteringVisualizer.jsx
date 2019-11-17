import React, { Component } from 'react';
import './ClusteringVisualizer.css';
import { Scatter } from 'react-chartjs-2';
import Data from './Data';

class ClusteringVisualizer extends Component {
	chartReference = {};

	MAX_WIDTH = 30;
	MAX_HEIGHT = 30;

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
		if (!Data.prototype.removedPoint) {
			const chart = this.chartReference.chartInstance;
			// scale event's x-value to chart's x-value
			const x_offset = chart.chartArea.left;
			const width = chart.chartArea.right - x_offset;
			const x = e.nativeEvent.offsetX - x_offset;
			const chart_x = (x / width * this.MAX_WIDTH).toFixed(2);
			// scale event's y-value to chart's y-value
			const y_offset = chart.chartArea.top;
			const height = chart.chartArea.bottom - y_offset;
			const y = e.nativeEvent.offsetY - y_offset;
			const chart_y = (this.MAX_HEIGHT - y / height * this.MAX_HEIGHT).toFixed(2);
			// check if chart_x and chart_y are within visible plot width, then add to plot
			if (chart_y <= this.MAX_WIDTH && chart_y <= this.MAX_HEIGHT) {
				Data.prototype.addData(chart, 'Scatter Dataset', { x: chart_x, y: chart_y });
				console.log("added (" + chart_x + ", " + chart_y + ")");
			}
		}
	}

	addData(chart, label, data) {
		chart.data.labels.push(label);
		chart.data.datasets.forEach((dataset) => {
			dataset.data.push(data);
		});
		chart.update();
	}

	render() {
		return (
			<div className='chart' onClick={!Data.prototype.removedPoint ? this.onMouseClick : undefined} >
				<Scatter ref={(reference) => this.chartReference = reference} data={this.state.data} options={this.state.options} onElementsClick={(elems) => { Data.prototype.removeData(elems, this.chartReference.chartInstance); }} />
			</div>
		);
	}
}

export default ClusteringVisualizer;
