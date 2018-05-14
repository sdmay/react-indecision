const getFirstName = (x) => x.split(' ')[0];

console.log(getFirstName('Scott May'))

const multiplier = {
    numArray: [1,2,3,4,5,6],
    multiplyBy: 5,
    multiply() {
        return this.numArray.map((newNum) => newNum * this.multiplyBy);
    }
};
console.log(multiplier.multiply())
// console.log('App.js is running');

const app = {
    title: "Indescision App",
    subtitle: "Put your life in the hands of a computer!",
    options: []
};

const template = (
    <div>
        <h1>{app.title}</h1>
        
            {app.subtitle && <p>{app.subtitle}</p>}
        
        <p>{app.options.length > 0 ? 'Here are your options...' : 'No Options'}</p>
            <ol>

            <li>Item One</li>
            <li>Item 2</li>

        </ol>
    </div>
);
{
    numbers.map( (number, i) => {
        return <p key={i}>Number: {number}</p>
    })
}

const user = {
    name: 'Scott',
    age: 33,
    location: ' ny'
}
function getLocation(x) {
    console.log(x)
    if (x) {
        console.log(typeof x)
        const y = x.toUpperCase().trim();
        console.log(y);
        return <p> Location {y} </p>
    }
}
let count = 0;
const addOne = () =>{
    
         count++;
         console.log(count);
         renderCounterApp();
}
const minusOne = () =>{
    if (count <= 0) {
        return false;
    }
    count--;
    console.log(count);
    renderCounterApp();
}
const reset = () =>{
    if(count === 0) {
        return false;
    }
    count = 0;
    console.log(count);
    renderCounterApp();
}
const appRooot = document.getElementById('app');

const renderCounterApp = () => {
const templateTwo = (
    <div>
    <h1>Count: {count}</h1>
    <button id="click" onClick={addOne}>+1</button>
    <button id="click2" onClick={minusOne}>-1</button>
    <button id="click3" onClick={reset}>Reset</button>

    
    </div>
);
ReactDOM.render(templateTwo, appRooot);

};

renderCounterApp();