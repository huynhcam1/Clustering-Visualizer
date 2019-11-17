import React, { Component } from 'react';

class Data extends Component {
	removedPoint = false;

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		//console.log(this);
	}

	addData(chart, label, data) {
		chart.data.labels.push(label);
		chart.data.datasets.forEach((dataset) => {
			dataset.data.push(data);
		});
		chart.update();
	}

	removeData(elems, chart) {
		if (elems[0] === undefined) {
			console.log("nothing there");
			this.removedPoint = false;
		} else {
			const index = elems[0]._index;
			console.log(index);
			chart.data.datasets[0].data.splice(index, 1); // 0 default until i add example datasets
			chart.update();
			this.removedPoint = true;
		}
	}

	plotUNVotes() {
		console.log("plot unvotes");
	}
}

export default Data;