export const checkIsGameOver = (cellsValues, isAllMovesMade, setIsAllMovesMade) => {
	const isCellsFulled = cellsValues.every((value) => value !== '');

	if (isCellsFulled && isAllMovesMade === false) {
		setIsAllMovesMade(true);
	}
};
