import React from 'react';
import sydneyFace from './sydney-face.png';

const MessageBox = () => {
  console.log('in message box component');
  return (
  <div className="message-box">
    <div className="anger-noodle-message">
      <div><img src={sydneyFace} id="anger-noodle" alt=""/></div>
      <div><h1 className="message">&quot;must destroy other kitteh&quot;</h1></div>
    </div>
  </div>
)};

export default MessageBox;
