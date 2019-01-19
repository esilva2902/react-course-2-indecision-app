console.log(`App.js is running...`);

// JSX - Javascript XML:

let app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

let template = (
    <div>
        { app.title ? <h1>{ app.title }</h1> : undefined }
        { app.subtitle && <h2>{ app.subtitle }</h2> }
        <p>{ app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
    </div>
);

let user = {
    name: 'Andrew',
    age: 17,
    location: 'Philadelphia'
};

function getLocation(location) {
    return location ? <p>Location: {location}</p>: location;
}

let templateTwo = (
    <div>
        <h1>Name: { user.name ? user.name : 'Anonymous' }</h1> 
        { (user.age && user.age >= 18) && <p>Age: { user.age }</p>  }
        { getLocation(user.location) }
    </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);