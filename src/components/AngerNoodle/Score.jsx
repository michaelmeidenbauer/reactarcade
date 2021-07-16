import React from 'react';
import PropTypes from "prop-types";

const Score = ({
  currentScore,
  highScore,
}) => {
  console.log('in message box component');
  return (
  <div className="score">
    Current score:
    {currentScore}
    {' '}
    High score:
    {highScore}
  </div>
)};

Score.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired
};

export default Score;
