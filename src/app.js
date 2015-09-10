'use strict';
import React, { Component } from 'react';
import template from './app.rt';
//var React = require('react');
//var fiddleTemplate = require('./fiddle.rt');

var Fiddle = React.createClass({
    displayName: 'Fiddle',
    getInitialState: () => {
        return {
            name: 'Kok22o'
        };
    },
    render: template
});

module.exports = Fiddle;

//export default class App extends Component {
//    constructor() {
//        super();
//        this.state = {name: 'Koko'};
//    }
//    render = template
//}




