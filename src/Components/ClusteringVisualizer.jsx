import React, { Component } from 'react';
import './ClusteringVisualizer.css';
import { Scatter } from 'react-chartjs-2';
// datasets
import UNVotes from '../Data/UN_Votes_MDS.json';
// algorithms
import KMeans from '../Algorithms/KMeans.js';
import EM from '../Algorithms/EM.js';

class ClusteringVisualizer extends Component {
	chartReference = {};

	MAX_WIDTH = 30;
	MAX_HEIGHT = 16;

	removedPoint = false;

	dataset = 'none';
	algorithm = 'none';

	seed = 1;

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
					pointBackgroundColor: ['Blue', 'Blue', 'Blue', 'Blue'],
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
		this.handleSubmitDataset = this.handleSubmitDataset.bind(this);
		this.handleChangeDataset = this.handleChangeDataset.bind(this);
		this.handleSubmitAlgorithm = this.handleSubmitAlgorithm.bind(this);
		this.handleChangeAlgorithm = this.handleChangeAlgorithm.bind(this);
		this.onMouseClick = this.onMouseClick.bind(this);
		this.changeColor = this.changeColor.bind(this);
	}

	componentDidMount() {
		console.log(this.chartReference.chartInstance.data.datasets[0].pointBackgroundColor[0]);
		//for (let k = 0; k < 10; k++) {
		//	console.log(this.psora(k, this.seed));
		//}
	}

	handleSubmitDataset(e) {
		if (this.dataset === 'unvotes') {
			this.plotUNVotes(); // will change state of data
		}
		e.preventDefault();
	}

	handleChangeDataset(e) {
		this.dataset = e.target.value;
		console.log(e.target.value);
	}

	handleSubmitAlgorithm(e) {
		if (this.algorithm === 'kmeans') {
			const array = KMeans.prototype.algorithm(this.chartReference.chartInstance, 3, 77);
			console.log(array);
			this.changeColor(this.chartReference.chartInstance, array);
		} else if (this.algorithm === 'em') {
			EM.prototype.algorithm(this.chartReference.chartInstance, 3, 6);
		}
		e.preventDefault();
	}

	handleChangeAlgorithm(e) {
		this.algorithm = e.target.value;
		console.log(e.target.value);
	}

	onMouseClick(e) {
		if (!this.removedPoint) {
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
				this.addData(chart, { x: chart_x, y: chart_y });
				console.log("added (" + chart_x + ", " + chart_y + ")");
			}
		}
	}

	changeColor(chart, array) {
		for (let i = 0; i < array.length; i++) {
			if (array[i] === 1) {
				chart.data.datasets[0].pointBackgroundColor[i] = 'Green';
			} else if (array[i] === 2) {
				chart.data.datasets[0].pointBackgroundColor[i] = 'Red';
			} else {
				chart.data.datasets[0].pointBackgroundColor[i] = 'Purple';
			}
		}
		chart.update();
	}

	psora(k, n) {
		const r = Math.PI * (k ^ n);
		return r - Math.floor(r);
	}

	addData(chart, data) {
		chart.data.datasets.forEach((dataset) => {
			dataset.data.push(data);
			dataset.pointBackgroundColor.push('Green');
		});
		chart.update();
	}

	removeData(elems) {
		if (elems[0] === undefined) {
			console.log("nothing there");
			this.removedPoint = false;
		} else {
			const chart = this.chartReference.chartInstance;
			const index = elems[0]._index;
			console.log(index);
			chart.data.datasets[0].data.splice(index, 1); // 0 default until i add example datasets
			chart.update();
			this.removedPoint = true;
		}
	}

	plotUNVotes() {
		const chart = this.chartReference.chartInstance;
		// clear previous data
		while (this.state.data.datasets[0].data.length > 0) {
			chart.data.labels.pop();
			chart.data.datasets.forEach((dataset) => {
				dataset.data.pop();
			});
		}
		let count = 0;
		UNVotes.forEach((data) => {
			setTimeout(() => {
				chart.data.datasets[0].data.push(data);
				chart.data.datasets[0].pointBackgroundColor.push('Blue');
				chart.update();
			}, 25 * count);
			count++;
			console.log(count);
		});
	}

	testButton() {
		console.log("for testing only");
	}

	render() {
		return (
			<div className="header">
				<h1>Clustering Visualizer</h1>
				<button type="button" onClick={this.testButton}>test button</button>
				<div className='datasets' onSubmit={this.handleSubmitDataset} >
					<form onChange={this.handleChangeDataset}>
						<label>
							Example Datasets:
						<select width={100} height={100}>
								<option value="none">None</option>
								<option value="unvotes">UN Votes</option>
							</select>
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
				<div className='algorithms' onSubmit={this.handleSubmitAlgorithm} >
					<form onChange={this.handleChangeAlgorithm}>
						<label>
							Algorithms:
						<select width={100} height={100}>
								<option value="none">None</option>
								<option value="kmeans">K-Means</option>
								<option value="em">EM</option>
							</select>
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
				<div className='chart' onClick={!this.removedPoint ? this.onMouseClick : undefined} >
					<Scatter ref={(reference) => this.chartReference = reference} data={this.state.data} options={this.state.options} onElementsClick={(elems) => { this.removeData(elems); }} />
				</div>
			</div>
		);
	}
}

export default ClusteringVisualizer;
