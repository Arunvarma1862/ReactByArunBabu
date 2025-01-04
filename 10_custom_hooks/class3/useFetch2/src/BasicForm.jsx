
import useLocalStorage from './Hooks/useLocalStorage'

function BasicForm() {

    const [firstName,setFirstName]=useLocalStorage("firstname","")
    const [lastName,setLastName]=useLocalStorage("lastname","")

    function handleSubmit(e){
    e.preventDefault();
    console.log("form Submitted")
    // setFirstName("")
    localStorage.setItem('one',JSON.stringify(firstName))

}

  return (
     <form action="" onSubmit={handleSubmit}>
        <label htmlFor="firstname">FirstName</label>
        <input type="text" name='firstname' id='firstname' placeholder='Enter firstName' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}  />
        <h1>FirstName: {firstName}</h1>
        <label htmlFor="lastname">LastName</label>
        <input type="text" name='lastname' id='lastname' placeholder='Enter lastName' value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
        <br />
        <button type='submit'>Submit</button>
        <h1>Lastname: {lastName}</h1>
     </form>
  )
}

export default BasicForm





// const firstNameRef= useRef()
// useEffect(()=>{
//     firstNameRef.current.focus()
// },[])

