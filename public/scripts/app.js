'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put  your life in the hands of a computer',
    options: ['word1', 'word2', 'word3', 'word4']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    console.log(option);
    if (option === '') {
        return false;
    } else {
        app.options.push(option);
        console.log(app.options);
        e.target.elements.option.value = '';
        upDateOptions();
    }
};
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    upDateOptions();
};
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var computerDecision = app.options[randomNum];
    console.log(computerDecision);
    alert('You should ' + computerDecision);
};

var numbers = [1, 2, 3, 4];
var appRoot = document.getElementById('app');

var upDateOptions = function upDateOptions() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options...' : 'No Options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'Make Decision'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'p',
            null,
            app.options.length === 0 ? 'You need some ideas?' : ''
        ),
        React.createElement(
            'h2',
            null,
            'Options:'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option, i) {
                return React.createElement(
                    'li',
                    { key: i },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
upDateOptions();
