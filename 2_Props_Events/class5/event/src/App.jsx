import "./App.css";
import Greetings from "./components/Greetings";
function App() {
  
  function handleclick(e){
    console.log("you clikced!!!");
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
    e.target.textContent="you clicked";
    setTimeout(() => {
      e.target.textContent="click me"
    }, 2000);
  }

  function handleclick2(firstName,lastName){
    console.log(firstName,lastName)
  }
  // wrapper function for above function
  //onclick works on --> html elements h1,h2,button,p

  function wrapperFunction(){
    handleclick2("jaddu","singh")
  }

  return (
    <>
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={handleclick} >click me</button> <br/> <br/>
      <button onClick={(e)=>{
         handleclick2("virat","kohil");
         console.log(e.target)
      }}>click me2</button>
      <br/>    <br/>
       <Greetings handleClick={handleclick}/>
    </div>

   
    </>
  );
}

export default App;
