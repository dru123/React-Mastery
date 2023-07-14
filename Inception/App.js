// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// ########### React with its CORE features ##############

// Creating an h1 element using core module i.e. React.
// Create Element will create an h1 react element which is an object.
const heading = React.createElement('h1',{id:'heading', cet:'value'},"Hello Starting Learning React");

// React Element (Object) => (HTMl) BY Browser
// Creating nested html, if we have to create multiple nested element inside parent it should be inside Array.
const parent = React.createElement('div', { id: "parent" },
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'Hello I am first child'),
        React.createElement('h2', {}, "Its time to sleep")]));

// Creating a root element inside browser under all the things rendered it is a part of DOM i.e. ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering it inside the root in browser.
root.render(parent);

//  Render replaces all the content already present in root with content pased to it. 