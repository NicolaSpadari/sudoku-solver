const board = ref<Board>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]);

export const useSudoku = () => {
	const size = board.value[0].length;

	const isValid = (row: Row, col: Col, num: number) => {
		for (let i = 0; i < size; i++) {
			if (board.value[row][i] === num || board.value[i][col] === num) {
				return false;
			}
		}

		const startRow = Math.floor(row / 3) * 3;
		const startCol = Math.floor(col / 3) * 3;

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (board.value[startRow + i][startCol + j] === num) {
					return false;
				}
			}
		}

		return true;
	};

	const backtrack = (row: Row, col: Col): boolean => {
		if (row === size - 1 && col === size) {
			return true;
		}

		if (col === size) {
			row++;
			col = 0;
		}

		if (board.value[row][col] !== 0) {
			return backtrack(row, col + 1);
		}

		for (let num = 1; num <= size; num++) {
			if (isValid(row, col, num)) {
				board.value[row][col] = num;
				if (backtrack(row, col + 1)) {
					return true;
				}

				board.value[row][col] = 0;
			}
		}

		return false;
	};

	const reset = () => {
		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				board.value[i][j] = 0;
			}
		}
	};

	const solve = () => {
		backtrack(0, 0);
	};

	return {
		board,
		solve,
		reset
	};
};
