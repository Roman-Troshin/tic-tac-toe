import styles from './Cell.module.css';
import PropTypes from 'prop-types';

const CellsLayout = ({ cellsValues, isButtonsBlocked, activateButton }) => (
	<div className={styles.field}>
		{cellsValues.map((value, index) => (
			<button
				key={index}
				className={styles.button}
				disabled={isButtonsBlocked}
				onClick={() => {
					activateButton(index);
				}}
			>
				{value}
			</button>
		))}
	</div>
);

CellsLayout.propTypes = {
	currentCellsValues: PropTypes.array,
	isButtonsAvailable: PropTypes.bool,
	activateButton: PropTypes.func,
};

export const CellsContainer = ({
	cellsValues,
	setCellsValues,
	currentSignMove,
	setCurrentSignMove,
	isButtonsBlocked,
}) => {
	const activateButton = (index) => {
		const updatedValue = [...cellsValues];
		updatedValue[index] = currentSignMove;
		setCellsValues(updatedValue);
		setCurrentSignMove(currentSignMove === 'x' ? 'o' : 'x');
	};

	return (
		<CellsLayout
			cellsValues={cellsValues}
			isButtonsBlocked={isButtonsBlocked}
			activateButton={activateButton}
		/>
	);
};

CellsContainer.propTypes = {
	cellsValues: PropTypes.array,
	setCellsValues: PropTypes.func,
	currentSignMove: PropTypes.string,
	setCurrentSignMove: PropTypes.func,
	isButtonsActive: PropTypes.bool,
};
