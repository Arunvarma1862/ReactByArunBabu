import Greet from "./components/Greetings";


function App() {
  const Users=["user1","user2"];
  const list={
    1:"india",
    2:"Australia",
    won:52
  }
  return (
    <>
      <Greet fullName="jaddu bhai" firstName="virat" lastName="kohil" age={23} users={Users} lists={list} />
      
      
    </>
  );
}

export default App;
