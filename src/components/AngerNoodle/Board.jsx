/* eslint-disable react/no-array-index-key */
import React from 'react';
import './AngerNoodle.css';
import PropTypes from 'prop-types';

const Board = ({ board, wallsAreLava, gameState}) => (
  <div className={`snake ${wallsAreLava ? 'lava' : ''}`}>
    { gameState === 'active' ?
      board.map((row, index) => (
        <div className={`row ${index}`} key={`row ${index}`}>
          {row.map(cell => (
            <div className={cell.classString} key={cell.id} />
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
  board: PropTypes.arrayOf(PropTypes.shape({
    classString: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  wallsAreLava: PropTypes.bool.isRequired,
  gameState: PropTypes.string.isRequired,
};
export default Board;
