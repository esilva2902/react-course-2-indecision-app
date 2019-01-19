'use strict';

console.log('App.js is running...');

// JSX - Javascript XML:

var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    app.title ? React.createElement(
        'h1',
        null,
        app.title
    ) : undefined,
    app.subtitle && React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

var user = {
    name: 'Andrew',
    age: 17,
    location: 'Philadelphia'
};

function getLocation(location) {
    return location ? React.createElement(
        'p',
        null,
        'Location: ',
        location
    ) : location;
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: ',
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
