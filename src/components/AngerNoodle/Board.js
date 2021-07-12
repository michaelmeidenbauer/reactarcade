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
      <div className='snake'>
        {
      board.map((row, index) => (
        <div key={index} className={`row ${index}`}>
          {row.map((cell, i) => (
            //trying to make sure i have unique keys for all the cells. maybe janky?
            <div className ={cell.classString} key={String(index) + i}>
            </div>
          ))}
        </div>
      ))
          }
      </div>
    );
    }
export default Board;