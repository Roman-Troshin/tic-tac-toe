import styles from './App.module.css';
import { useState } from 'react';

import PropTypes from 'prop-types';

import { INITIAL_CELLS_VALUES } from './constants/initialCellsValues';
import { WIN_CASES } from './constants/winCases';

import { checkIsGameOver } from './help-functions/checkIsGameOver';
import { checkIsSomeoneWin } from './help-functions/checkIsSomeoneWin';

import { GameHeaderInformationContainer } from './game-header-information/GameHeaderInformation';
import { CellsContainer } from './cells-field/Cell';

const AppLayout = ({ resetFunction }) => (
	<button className={styles.button} onClick={resetFunction}>
		Начать сначала
	</button>
);

AppLayout.propTypes = {
	resetFunction: PropTypes.func,
};

export const AppContainer = () => {
	const [WinSign, setWinSign] = useState('');
	const [isAllMovesMade, setIsAllMovesMade] = useState(false);
	const [cellsValues, setCellsValues] = useState(INITIAL_CELLS_VALUES);
	const [currentSignMove, setCurrentSignMove] = useState('x');

	const isButtonsBlocked = Boolean(WinSign) || isAllMovesMade;

	checkIsSomeoneWin(WIN_CASES, WinSign, setWinSign, cellsValues);
	checkIsGameOver(cellsValues, isAllMovesMade, setIsAllMovesMade);

	const resetGame = () => {
		setWinSign('');
		setIsAllMovesMade(false);
		setCellsValues(INITIAL_CELLS_VALUES);
	};

	return (
		<div className={styles.mainContainer}>
			<GameHeaderInformationContainer
				winSign={WinSign}
				currentSignMove={currentSignMove}
				isGameOver={isAllMovesMade}
			/>

			<CellsContainer
				cellsValues={cellsValues}
				setCellsValues={setCellsValues}
				currentSignMove={currentSignMove}
				setCurrentSignMove={setCurrentSignMove}
				isButtonsBlocked={isButtonsBlocked}
			/>

			<AppLayout resetFunction={() => resetGame()} />
		</div>
	);
};
