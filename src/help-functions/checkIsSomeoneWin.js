export const checkIsSomeoneWin = (WIN_CASES, WinSign, setWinSign, cellsValues) => {
	WIN_CASES.forEach((element) => {
		const [firstSign, secondSign, thirdSign] = element;

		if (
			cellsValues[firstSign] === cellsValues[secondSign] &&
			cellsValues[secondSign] === cellsValues[thirdSign] &&
			cellsValues[firstSign] !== '' &&
			WinSign === ''
		) {
			setWinSign(cellsValues[firstSign]);
		}
	});
};
