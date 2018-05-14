const app = { 
    title: 'Indecision App',
    subtitle: 'Put  your life in the hands of a computer',
    options: ['word1', 'word2', 'word3', 'word4']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value
    console.log(option);
    if (option === '') {
        return false;
    } else {
        app.options.push(option);
        console.log(app.options);
        e.target.elements.option.value = '';
        upDateOptions();
    }
}
const onRemoveAll = () => {
    app.options = []; 
    upDateOptions();

};
const onMakeDecision = () => {
    const randomNum =Math.floor(Math.random() * app.options.length);
    const computerDecision = app.options[randomNum];
    console.log(computerDecision);
    alert('You should ' + computerDecision)
}

const numbers = [1, 2, 3, 4];
const appRoot = document.getElementById('app');

const upDateOptions = () => {
const template = (
    <div>
        <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options...' : 'No Options'}</p>
        <p>{app.options.length}</p> 
        <button disabled={app.options.length === 0}onClick={onMakeDecision}>Make Decision</button>
        <button onClick={onRemoveAll}>Remove All</button>   
        <p>{app.options.length === 0 ? 'You need some ideas?' : ''}</p>
       <h2>Options:</h2>
        <ol>
        {
            app.options.map( (option, i) => {
                return <li key={i}>{option}</li>
            })
       }

        </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        </form>
    </div>
);
ReactDOM.render(template, appRoot);
};
upDateOptions();
