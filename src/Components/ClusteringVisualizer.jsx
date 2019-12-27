import React, { Component } from 'react';
import './ClusteringVisualizer.css';
import { Scatter } from 'react-chartjs-2';
// datasets
import UNVotes from '../Data/UN_Votes_MDS.json';
// algorithms
import KMeans from '../Algorithms/KMeans.js';
import EM from '../Algorithms/EM.js';

class ClusteringVisualizer extends Component {
	// initialize chart
	chartReference = {};

	// set plot width and height boundaries
	MAX_WIDTH = 30;
	MAX_HEIGHT = 16;

	// value to determine whether a point is being removed onClick to prevent adding after removed point
	removedPoint = false;

	// initialize dataset, algorithm, and cluster count variables as none
	dataset = 'none';
	algorithm = 'none';
	clusterCount = 1;

	// for randomization (CURRENTLY NOT NEEDED)
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
		// bind functions that HTML references
		this.handleSubmitDataset = this.handleSubmitDataset.bind(this);
		this.handleChangeDataset = this.handleChangeDataset.bind(this);
		this.handleSubmitAlgorithm = this.handleSubmitAlgorithm.bind(this);
		this.handleChangeAlgorithm = this.handleChangeAlgorithm.bind(this);
		this.handleChangeClusterCount = this.handleChangeClusterCount.bind(this);
		this.onMouseClick = this.onMouseClick.bind(this);
		this.changeColor = this.changeColor.bind(this);
		this.toggleDropDownMenu = this.toggleDropDownMenu.bind(this);
		this.clearData = this.clearData.bind(this);
		this.debugButton = this.debugButton.bind(this);
	}

	componentDidMount() {
		console.log(document.getElementsByClassName("dropbtn")[0].style);
		//for (let k = 0; k < 10; k++) {
		//	console.log(this.psora(k, this.seed));
		//}
	}

	// when the button for dataset is submitted, plot data for selected dataset
	handleSubmitDataset(e) {
		if (this.dataset === 'unvotes') {
			this.plotUNVotes(); // will change state of data
		}
		e.preventDefault();
	}

	handleChangeDataset(e) {
		this.dataset = e.target.value;
		console.log(e.target.value);
		this.toggleDropDownMenu(0);
	}

	// when the button for algorithms is submitted, cluster the current data based on the selected algorithm
	handleSubmitAlgorithm(e) {
		if (this.algorithm === 'kmeans') {
			const k = this.clusterCount;
			const n = this.chartReference.chartInstance.data.datasets[0].data.length;
			const array = KMeans.prototype.algorithm(this.chartReference.chartInstance, k, n);
			console.log(array);
			this.changeColor(this.chartReference.chartInstance, array);
		} else if (this.algorithm === 'em') {
			const k = this.clusterCount;
			const n = 6;
			EM.prototype.algorithm(this.chartReference.chartInstance, k, n);
		}
		e.preventDefault();
	}

	handleChangeAlgorithm(e) {
		this.algorithm = e.target.value;
		console.log(e.target.value);
		this.toggleDropDownMenu(1);
	}

	handleChangeClusterCount(e) {
		this.clusterCount = e.target.value;
		console.log(e.target.value);
		this.toggleDropDownMenu(2);
	}

	// when mouse is clicked on the graph, scale mouse coordinates to match graph axis
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
				this.addData(chart, { x: parseFloat(chart_x), y: parseFloat(chart_y) });
				console.log("added (" + chart_x + ", " + chart_y + ")");
			}
		}
	}

	// change color for each point to match differentiate the clusters
	changeColor(chart, array) {
		let count = 0;
		for (let i = 0; i < array.length; i++) {
			setTimeout(() => {
				if (array[i] === 1) {
					chart.data.datasets[0].pointBackgroundColor[i] = 'Blue';
				} else if (array[i] === 2) {
					chart.data.datasets[0].pointBackgroundColor[i] = 'Green';
				} else {
					chart.data.datasets[0].pointBackgroundColor[i] = 'Red';
				}
				chart.update();
			}, 25 * count);
			count++;
		}
	}

	// for randomization (NOT CURRENTLY USED)
	psora(k, n) {
		const r = Math.PI * (k ^ n);
		return r - Math.floor(r);
	}

	// addData runs after removeData
	addData(chart, data) {
		chart.data.datasets.forEach((dataset) => {
			dataset.data.push(data);
			dataset.pointBackgroundColor.push('Blue');
		});
		chart.update();
	}

	// removes data from chart if there exists in datapoint when clicked
	removeData(elems) {
		if (elems[0] === undefined) {
			console.log("nothing there");
			this.removedPoint = false;
		} else {
			const chart = this.chartReference.chartInstance;
			const index = elems[0]._index;
			console.log(index);
			chart.data.datasets[0].data.splice(index, 1); // 0 default until i add example datasets
			chart.data.datasets[0].pointBackgroundColor.splice(index, 1);
			chart.update();
			this.removedPoint = true;
		}
	}

	plotUNVotes() {
		const chart = this.chartReference.chartInstance;
		this.clearData();
		let count = 0;
		UNVotes.forEach((data) => {
			setTimeout(() => {
				chart.data.datasets[0].data.push(data);
				chart.data.datasets[0].pointBackgroundColor.push('Blue');
				chart.update();
			}, 25 * count);
			count++;
		});
	}

	// clear all data
	clearData() {
		const chart = this.chartReference.chartInstance;
		while (this.state.data.datasets[0].data.length > 0) {
			chart.data.labels.pop();
			chart.data.datasets.forEach((dataset) => {
				dataset.data.pop();
				dataset.pointBackgroundColor.pop();
			});
		}
		chart.update();
	}

	toggleDropDownMenu(index) {
		const x = document.getElementsByClassName("dropdown-content");
		for (let i = 0; i < 3; i++) {
			if (i === index) {
				if (x[i].style.display === 'block') {
					x[i].style.display = 'none';
				} else {
					x[i].style.display = 'block';
				}
			} else {
				x[i].style.display = 'none';
			}
		}
		
	}

	debugButton() {
		document.getElementsByClassName("dropbtn")[0].firstChild.data = "UN Votes";
	}

	render() {
		return (
			<div className="header">
				<h1>Clustering Visualizer</h1>
				<ul>
					<li className="dropdown">
						<option className="dropbtn" onClick={() => this.toggleDropDownMenu(0)}>Datasets</option>
						<div className="dropdown-content">
							<button type="button" value="unvotes" onClick={this.handleChangeDataset}> UN Votes </button>
						</div>
					</li>
					<li className="dropdown">
						<option className="dropbtn" onClick={this.handleSubmitDataset}>Visualize!</option>
					</li>
					<li className="dropdown">
						<option className="dropbtn" onClick={this.clearData}>Clear Graph</option>
					</li>
					<li className="dropdown">
						<a className="blank"></a>
					</li>
					<li className="dropdown">
						<option className="dropbtn" onClick={() => this.toggleDropDownMenu(1)}>Algorithms</option>
						<div className="dropdown-content">
							<button type="button" value="kmeans" onClick={this.handleChangeAlgorithm}>K-Means</button>
							<button type="button" value="em" onClick={this.handleChangeAlgorithm}>Expectation-Maximization (in progress)</button>
						</div>
					</li>
					<li className="dropdown">
						<option className="dropbtn" onClick={() => this.toggleDropDownMenu(2)}>Cluster Count</option>
						<div className="dropdown-content">
							<button type="button" value="1" onClick={this.handleChangeClusterCount}>1</button>
							<button type="button" value="2" onClick={this.handleChangeClusterCount}>2</button>
							<button type="button" value="3" onClick={this.handleChangeClusterCount}>3</button>
						</div>
					</li>
					<li className="dropdown">
						<option className="dropbtn" onClick={this.handleSubmitAlgorithm}>Cluster!</option>
					</li>
					<li className="dropdown">
						<option className="dropbtn" onClick={this.debugButton}>Debug Button (do not click)</option>
					</li>
				</ul>
				<div className='chart' onClick={!this.removedPoint ? this.onMouseClick : undefined} >
					<Scatter ref={(reference) => this.chartReference = reference} data={this.state.data} options={this.state.options} onElementsClick={(elems) => { this.removeData(elems); }} />
				</div>
			</div>
		);
	}
}

export default ClusteringVisualizer;
