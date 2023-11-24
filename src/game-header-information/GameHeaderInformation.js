import PropTypes from 'prop-types';
import styles from './GameHeaderInformation.module.css';

const GameHeaderInformationLayout = ({ currentGameInfirmation }) => (
	<div className={styles.header}>{currentGameInfirmation}</div>
);

GameHeaderInformationLayout.propTypes = {
	currentGameInfirmation: PropTypes.string,
};

export const GameHeaderInformationContainer = ({
	winSign,
	currentSignMove,
	isGameOver,
}) => {
	const checkCurrentStepOrResult = () => {
		if (winSign) {
			return `Игра окончена, победил: ${winSign}`;
		} else if (isGameOver) {
			return 'Игра окончена, НИЧЬЯ!';
		} else {
			return `Сейчас ходит: ${currentSignMove}`;
		}
	};

	return (
		<GameHeaderInformationLayout currentGameInfirmation={checkCurrentStepOrResult()} />
	);
};

GameHeaderInformationContainer.propTypes = {
	winSign: PropTypes.string,
	currentSignMove: PropTypes.string,
	isGameOver: PropTypes.bool,
};
