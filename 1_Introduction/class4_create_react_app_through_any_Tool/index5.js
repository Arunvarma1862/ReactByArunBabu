const rootElement= document.getElementById("root");

function HelloWorld(){
    return <h1>Hello world</h1>
}

ReactDOM.createRoot(rootElement).render(<HelloWorld/>)