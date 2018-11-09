import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const numbers = Array.from(Array(5).keys());

function NumberItems(props) {

    let numbers = props.number;
    let items = numbers.map(x => <li key={x.toString()}>{x}</li>)

    return <ul>{items}</ul>
}

ReactDOM.render(<NumberItems number={numbers}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
