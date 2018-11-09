import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const numbers = Array.from(Array(5).keys());

function NumberItems(props) {

    let numbers = props.number;
    //  Note: Typical solutions for setting keys are to set keys to the IDs passed with the data.
    //  Note: The solution below will use the item index as it's keys
    //  Important: Bad practice to use indexes as keys for lists where the order may change.
    let items = numbers.map((num, index) => <li key={index}>{num}</li>)

    return <ul>{items}</ul>
}

ReactDOM.render(<NumberItems number={numbers}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
