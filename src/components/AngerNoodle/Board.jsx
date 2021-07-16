/* eslint-disable react/no-array-index-key */
import React from 'react';
import './AngerNoodle.css';
import PropTypes from 'prop-types';

const Board = ({ board }) => (
  <div className="snake">
    {
      board.map((row, index) => (
        <div key={index} className={`row ${index}`}>
          {row.map((cell, i) => (
            // trying to make sure i have unique keys for all the cells. maybe janky?
            <div className={cell.classString} key={String(index) + i} />
          ))}
        </div>
      ))
          }
  </div>
);
Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.shape({
    classString: PropTypes.string.isRequired,
  })).isRequired,
};
export default Board;
