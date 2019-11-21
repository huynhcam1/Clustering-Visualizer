class EM {
	algorithm(k, n) {
		const array = [];
		this.repeatRange(array, k, n);
		this.shuffle(array);
		console.log(array);
		const gammas = [];
		this.zeros(gammas, n, k);
		// for each row in gammas, set column j based on the randomly sorted array to 1
		for (let j = 0; j < n; j++) {
			gammas[j][array[j]-1] = 1;
		}
		console.log(gammas);
		const pis = this.divideArray(this.colSums(gammas, k, n), n);
		console.log(pis);
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

	zeros(array, rows, columns) {
		for (let i = 0; i < rows; i++) {
			array.push([0])
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
		console.log(sums);
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < k; j++) {
				if (array[i][j] === 1) {
					sums[j]++;
				}
			}
		}
		return sums;
	}

	divideArray(array, n) {
		for (let i = 0; i < array.length; i++) {
			array[i] /= n;
		}
		return array;
	}
}

export default EM;