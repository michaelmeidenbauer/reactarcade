import React from 'react';
import PropTypes from 'prop-types';
import sydneyFace from './sydney-face.png';

const MessageBox = ({angryMessage}) => (
  <div className="message-box">
    <div className="anger-noodle-message">
      <div><img src={sydneyFace} id="anger-noodle" alt=""/></div>
      <div><h1 className="message">{angryMessage}</h1></div>
    </div>
  </div>
);

MessageBox.propTypes = {
  angryMessage: PropTypes.string.isRequired,
}

export default MessageBox;
