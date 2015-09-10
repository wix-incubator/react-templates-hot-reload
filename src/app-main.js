'use strict';
import React, { Component } from 'react';
import app from './app';
import _ from 'lodash';

console.log('Hello from app-main', _.now());

var elem = React.createElement(app);
var rootInstance = React.render(elem, document.getElementById('root'));

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            // Help React Hot Loader figure out the root component instances on the page:
            return [rootInstance];
        }
    });
}