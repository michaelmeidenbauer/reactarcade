import React from 'react';
import PropTypes from 'prop-types';

const DifficultyControls = ({
  updateTickRate,
  wallsAreLava,
  updateWallsAreLava,
  portalsAllowed,
  updatePortalsAllowed,
}) => (
  <div className="difficulty-controls">
    <div className="anger-noodle-controls">
      <div>Sleepy Anger Noodle</div>
      <div className="slider">
        <input
          id="speed-slider"
          type="range"
          defaultValue="100"
          min="50"
          max="150"
          onChange={(e) => {
            updateTickRate(e.target.value);
          }}
        />
      </div>
      <div>Turbo Anger Noodle</div>
    </div>
    <div className="anger-noodle-controls">
      <button
        type="button"
        id="lava-button"
        className={wallsAreLava ? 'lava' : ''}
        onClick={() => {
          updateWallsAreLava(!wallsAreLava);
        }}
      >
        💀 Walls are lava 💀
      </button>
      <button
        type="button"
        id="portal-button"
        className={portalsAllowed ? 'portal-button-active' : ''}
        onClick={() => {
          updatePortalsAllowed(!portalsAllowed);
        }}
      >
        Portals
      </button>
    </div>
  </div>
);

DifficultyControls.propTypes = {
  updateTickRate: PropTypes.func.isRequired,
  wallsAreLava: PropTypes.bool.isRequired,
  updateWallsAreLava: PropTypes.func.isRequired,
  portalsAllowed: PropTypes.bool.isRequired,
  updatePortalsAllowed: PropTypes.func.isRequired,
};

export default DifficultyControls;
