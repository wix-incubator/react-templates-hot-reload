import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import app from './app';

var elem = React.createElement(app);
var rootInstance = ReactDOM.render(elem, document.getElementById('root'));

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            // Help React Hot Loader figure out the root component instances on the page:
            return [rootInstance];
        }
    });
}