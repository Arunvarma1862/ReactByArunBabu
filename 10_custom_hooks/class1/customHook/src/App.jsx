
import './App.css'
import useFetch from './Hooks/useFetch'

function App() {
  // console.log("component rendered") 
  const {data,isPending,error}=useFetch("https://jsonplaceholder.typicode.com/users")
   if(isPending){
    return <h1>Loading...</h1>
   }
   if(error){
    return <h1>{error}</h1>
   }
  return (
    <>
      {data && data.map((item)=>{
         return <div key={item.id}>
             <h2>{item.name}</h2>
         </div> 
      })}
    </>
  )
}

export default App
