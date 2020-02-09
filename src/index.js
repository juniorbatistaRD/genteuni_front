import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Parse from 'parse'
import * as serviceWorker from './serviceWorker';


//Initialize Parse Server SDK
Parse.serverURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:1337/parse' : 'https://parseapi.back4app.com/'
Parse.initialize("OUr4laQTLAlCcXBV8uJcEDilfeK42siE5FKEuSC5", "sFgerkhqDaXERMxKLI7k7ccD4dZBkH78yo8gd4n3");


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
