class KMeans {
	algorithm(chart, k, n) {
		const data = [];
		this.dataToArray(chart, data, n, k);
		// console.log(data);
		const array = [];
		this.repeatRange(array, k, n);
		this.shuffle(array);
		console.log(array);
		for (let z = 0; z < 10; z++) {
			const gammas = [];
			this.zeros(gammas, n, k);
			// for each row in gammas, set column j based on the randomly sorted array to 1
			for (let j = 0; j < n; j++) {
				gammas[j][array[j] - 1] = 1;
			}
			const gammasColSum = this.colSums(gammas, k, n);
			// console.log(gammasColSum);
			const centroids = [];
			for (let i = 1; i <= k; i++) {
				// copy array
				const temp = data.slice();
				for (let j = 0; j < n; j++) {
					if (array[j] !== i) {
						temp[j] = [0, 0];
					}
				}
				centroids.push(this.colSums(temp, 2, n));
				centroids[i - 1][0] /= gammasColSum[i - 1];
				centroids[i - 1][1] /= gammasColSum[i - 1];
			}
			// console.log(centroids);
			for (let i = 0; i < n; i++) {
				const distances = [];
				for (let j = 0; j < k; j++) {
					// get euclidean distances
					let x = data[i][0] - centroids[j][0];
					x *= x;
					let y = data[i][0] - centroids[j][0];
					y *= y;
					let distance = Math.sqrt(x + y);
					distances.push(distance);
				}
				// find min distance and change point to new k value
				let index = 0;
				let min = Number.MAX_VALUE;
				for (let k = 0; k < distances.length; k++) {
					if (distances[k] < min) {
						index = k;
						min = distances[k];
					}
				}
				array[i] = index + 1;
			}
		}
		return array;
	}

	dataToArray(chart, data, n, k) {
		for (let i = 0; i < n; i++) {
			data.push([]);
			data[i][0] = chart.data.datasets[0].data[i].x;
			data[i][1] = chart.data.datasets[0].data[i].y;
		}
	}

	repeatRange(array, k, n) {
		let count = 0;
		while (count < n) {
			for (let i = 1; i < k + 1; i++) {
				if (count < n) {
					array.push(i);
					count++;
				} else {
					break;
				}
			}
		}
	}

	// randomly reorder array
	shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	colSums(array, k, n) {
		const sums = [];
		for (let i = 0; i < k; i++) {
			sums.push(0);
		}
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < k; j++) {
				sums[j] += array[i][j];
			}
		}
		return sums;
	}

	zeros(array, rows, columns) {
		for (let i = 0; i < rows; i++) {
			array.push([0]);
			for (let j = 0; j < columns; j++) {
				array[i][j] = 0;
			}
		}
	}
}

export default KMeans;