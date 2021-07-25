/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Board = ({ board, wallsAreLava, gameState, direction }) => (
  <div className={`snake ${wallsAreLava ? 'lava' : ''}`}>
    {(gameState === 'active' || gameState === 'paused') ?
      board.map((row, index) => (
        <div className={`row ${index}`} key={`row ${index}`}>
          {row.map(cell => (
            <Cell cell={cell} direction={direction} key={cell.id} />
          ))}
        </div>
      ))
      :
      <div className="game-over-angerNoodle">
        <h1>GAME OVER</h1>
        <h4>The anger noodle commands you to play again (arrow keys/spacebar)</h4>
      </div>
    }
  </div>
);
Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    isSegment: PropTypes.bool.isRequired,
    isTreat: PropTypes.bool.isRequired,
    // bluePortal: PropTypes.bool.isRequired,
    // orangePortal: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }))).isRequired,
  wallsAreLava: PropTypes.bool.isRequired,
  gameState: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};
export default Board;
