const rootElement= document.getElementById("root")
console.log(rootElement);

// type, props, children

// function helloWorld(){
//   return  React.createElement("h1",{className:"heading"},"hello world");
// }

// const el= React.createElement("h1",null,"hello world");
// console.log(el);

function HelloWorld(){
    return <h1>Hello world</h1>
}

ReactDOM.createRoot(rootElement).render(<HelloWorld/>);
// ReactDOM.createRoot(rootElement).render(el);
// ReactDOM.createRoot(rootElement).render(helloWorld());

// things to remember
// react, reactDOM
// jsx(babel convert jsx to actual react code)-<h1>Hello world</h1> to React.createElement("h1",null,"hello world");


