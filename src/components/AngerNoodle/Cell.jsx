import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ cell, direction }) => {
    let classString = 'cell';
    if (cell.isTreat) {
        classString += ' treat';
    }
    if (cell.isSegment) {
        classString += `segment ${direction}`;
    }
    return (
        <div className={classString} />
    )
};

Cell.propTypes = {
    cell: PropTypes.shape({
        isSegment: PropTypes.string.isRequired,
        isTreat: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    direction: PropTypes.string.isRequired,
};
export default Cell;