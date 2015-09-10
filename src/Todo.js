'use strict';
import React, { Component } from 'react';
import template from './Todo.rt';

module.exports = React.createClass({
    displayName: 'Todo',
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function () {
        return {edited: '', todos: [], counter: 0};
    },
    add() {
        if (this.state.edited.trim().length === 0) {
            return;
        }
        var newTodo = {value: this.state.edited, done: false, key: this.state.counter};
        this.setState({todos: this.state.todos.concat(newTodo), edited: '', counter: this.state.counter + 1});
    },
    remove(todo) {
        this.setState({todos: _.reject(this.state.todos, todo)});
    },
    toggleChecked(index) {
        var todos = _.cloneDeep(this.state.todos);
        todos[index].done = !todos[index].done;
        this.setState({todos: todos});
    },
    clearDone() {
        this.setState({todos: _.filter(this.state.todos, {done: false})});
    },
    countTodos(done) {
        return _.filter(this.state.todos, {done: done}).length;
    },
    inputKeyDown(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            this.add();
        }
    },
    render: template
});