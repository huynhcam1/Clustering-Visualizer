import React, { Component } from 'react';
import './Header.css';
import Data from './Data';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			algorithm: 'none'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		console.log(Data.prototype);
		Data.prototype.plotUNVotes();
	}

	handleSubmit(e) {
		if (this.state.algorithm === 'unvotes') {
			console.log("unvotes");
			//Data.plotUNVotes();
		}
		e.preventDefault();
	}

	handleChange(e) {
		this.setState({ algorithm: e.target.value });
	}

	render() {
		return (
			<div className='header' onSubmit={this.handleSubmit} >
				<h1>Clustering Visualizer</h1>
				<form onChange={this.handleChange}>
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
		);
	}
}

export default Header;