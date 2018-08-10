import React from 'react';
import text from './title.json';
import './stylesheet/style.css';
// import './stylesheet/goodbye.scss';

const styles={
  goodbye:{
    backgroundColor: 'turquoise',
    color: 'indigo',
  }
}
export const hello =(
  <h1 id="title" className="hello">
  {text.hello}
  </h1>
)
export const goodbye =(
  <h1 id="title" style={styles.goodbye}>
  {text.goodbye}
  </h1>
)
