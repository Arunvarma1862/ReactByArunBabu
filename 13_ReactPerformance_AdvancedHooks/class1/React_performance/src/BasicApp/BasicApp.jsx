import InputForm from "./InputForm";
import ExtraComponent from "./ExtraComponent";

function BasicApp() {
  console.log("basic App renderd");
  return (
    <div>
      <h1>Basic App</h1>
      <InputForm>
        <ExtraComponent />
      </InputForm>
    </div> 
  );
}

export default BasicApp;
