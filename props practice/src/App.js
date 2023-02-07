import "./App.scss";
import ListComp from "./components/List";
// import { users } from "./assets/data/data.js";
import { useEffect, useState } from "react";
// import ParentComponent from "./components/parent";
// import Form from "./components/form";
// import Header from "./layout/header";
// import Footer from "./layout/footer";

function App() {
  // let group = "AF-202";
  // const [usersData, setUsersData] = useState(users);

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsersData(data));
  }, []);

  return (
    <div className="App">
      {/* <Header />
      <Form />
      <Footer /> */}
      {/* <ParentComponent group={group} /> */}
      <ListComp usersData={usersData} />
    </div>
  );
}

export default App;
