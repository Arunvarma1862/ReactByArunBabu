import React from "react";
import useFetch2 from "./Hooks/useFetch2";
function User() {
  const { data, isPending, error } = useFetch2(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default User;
