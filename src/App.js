import "./App.scss";
// import DataComp from "./components/data";
// import Calculator from "./company/calculator";
// import InputComp from "./company/input";
// import Counter from "./company/counter";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  let sortUsers = [...users].sort((a, b) => (a.username > b.username ? 1 : -1));
  let idSort = [...sortUsers].sort((a, b) => a.id - b.id);
  console.log(users);
  console.log(sortUsers);
  console.log(idSort);
  return (
    <div className="App">
      App
      {/* <Counter /> */}
      {/* <Calculator /> */}
      {/* <InputComp /> */}
      {/* <DataComp /> */}
    </div>
  );
}

export default App;
