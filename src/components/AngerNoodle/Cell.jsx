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
    if (cell.orangePortal || cell.bluePortal) {
        classString += ` ${cell.bluePortal ? 'blue-portal' : 'orange-portal'}`;
    }
    return (
        <div className={classString} />
    )
};

Cell.propTypes = {
    cell: PropTypes.shape({
        isSegment: PropTypes.bool.isRequired,
        isTreat: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
        bluePortal: PropTypes.bool.isRequired,
        orangePortal: PropTypes.bool.isRequired,
      }).isRequired,
    direction: PropTypes.string.isRequired,
};
export default Cell;