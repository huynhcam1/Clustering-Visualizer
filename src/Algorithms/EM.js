class EM {
	algorithm(chart, k, n) {
		// console.log(chart.data.datasets[0].data[0].x);
		const array = [3,2,3,1,2,1];
		// this.repeatRange(array, k, n);
		// this.shuffle(array);
		// console.log(array);
		const gammas = [];
		this.zeros(gammas, n, k);
		// for each row in gammas, set column j based on the randomly sorted array to 1
		for (let j = 0; j < n; j++) {
			gammas[j][array[j]-1] = 1;
		}
		// console.log(gammas);
		const gammasColSum = this.colSums(gammas, k, n);
		// console.log(gammasColSum);
		const gammasCount = [];
		this.repeat(gammasCount, n, k);
		const pis = this.divideArray(gammasColSum, gammasCount);
		// console.log(pis);
		const data = [];
		this.dataToArray(chart, data, n, k);
		// console.log(data);
		let mus = [];
		// k = 3, columns = 2 (x, y)
		this.zeros(mus, 3, 2);
		let sigmas = [];
		for (let j = 0; j < k; j++) {
			sigmas.push([]);
			for (let i = 0; i < n; i++) {
				mus[j][0] += data[i][0] * gammas[i][j];
				mus[j][1] += data[i][1] * gammas[i][j];
				sigmas[j].push([data[i][0] * gammas[i][j], data[i][1] * gammas[i][j]]);
			}
			mus[j][0] /= gammasColSum[j];
			mus[j][1] /= gammasColSum[j];

		}
		// console.log(mus);
		// console.log(sigmas);
		// console.log(sigmas[0]);
		for (let h = 0; h < 3; h++) {
			let covariance = [];
			this.zeros(covariance, 2, 2);
			for (let i = 0; i < 2; i++) {
				for (let j = 0; j < n; j++) {
					covariance[i][0] += sigmas[h][j][i] * data[j][0];
					covariance[i][1] += sigmas[h][j][i] * data[j][1];
				}
				covariance[i][0] /= gammasColSum[1];
				covariance[i][1] /= gammasColSum[1];
			}
			sigmas[h] = covariance;
		}
		console.log(sigmas);
		
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

	repeat(array, value, numberoftimes) {
		for (let i = 0; i < numberoftimes; i++) {
			array.push(value);
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

	zeros(array, rows, columns) {
		for (let i = 0; i < rows; i++) {
			array.push([0]);
			for (let j = 0; j < columns; j++) {
				array[i][j] = 0;
			}
		}
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

	divideArray(array, divisor) {
		const newArray = [];
		for (let i = 0; i < array.length; i++) {
			newArray.push(array[i] / divisor[i]);
		}
		return newArray;
	}
}

export default EM;