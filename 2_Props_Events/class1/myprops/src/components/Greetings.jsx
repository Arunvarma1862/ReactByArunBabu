import ShowFullName from "./ShowFullName";

function Greetings( props) {
    // console.log(props);

    // const firstName=props.firstName;
    // const lastName=props.lastName;

    // const {firstName,lastName}= props;

    // props value can not assign like props.firstName="hello world", only readonly, can't change
  return (
    <>
      {/* <h1>Hello {fullName} {firstName} {lastName} {age} {users[0]} {lists["1"]}{lists.won}</h1> */}
       <ShowFullName {...props}/>
    </>
  );
}

export default  Greetings;
