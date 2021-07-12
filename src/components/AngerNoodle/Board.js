import React, { useState, useEffect } from 'react';
import './AngerNoodle.css'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';



const Board = ({board}) => {
    return (
        <div className="snake">
        {
          board.map((row, index) => (
            <div className="cell" key={index}></div>
          ))
        }
      </div>
    );
    }
export default Board;