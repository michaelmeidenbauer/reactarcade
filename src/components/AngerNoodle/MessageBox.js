import React, { useState, useEffect } from 'react';
import sydneyFace from './sydney-face.png';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
const MessageBox = () => {
    return (
        <div className="message-box">
            <div className="anger-noodle-message">
                <div><img src={sydneyFace} id="anger-noodle"></img></div>
                    <div><h1 className="message">"must destroy other kitteh"</h1></div>
            </div>
        </div>
    );
};

export default MessageBox;