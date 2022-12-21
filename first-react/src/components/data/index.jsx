import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { users } from "./data.js";
import "./index.scss";
const DataComp = () => {
  const [usersData, setUsersData] = useState(users);
  const [editId, seteditId] = useState("");
  const nameIn = useRef();
  const emailIn = useRef();
  const handleDelete = (e) => {
    let updateUsers = usersData.filter(
      (elem) => elem.id != e.target.parentElement.parentElement.id
    );
    setUsersData(updateUsers);
  };
  const handleEdit = (e) => {
    seteditId(e.target.parentElement.parentElement.id);
    usersData.forEach((element) => {
      if (element.id == e.target.parentElement.parentElement.id) {
        nameIn.current.value = element.name;
        emailIn.current.value = element.email;
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let editObj = {
      name: nameIn.current.value,
      email: emailIn.current.value,
    };
    console.log(editObj);

    console.log(editId);
    let findData = usersData.find((el) => editId !== el.id)
  };
  return (
    <div style={{ display: "flex", columnGap: "60px" }}>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((element, i) => {
            return (
              <tr id={element.id} key={i}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>
                  <button
                    className="deleteBtn"
                    onClick={(e) => handleDelete(e)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="editBtn" onClick={(e) => handleEdit(e)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="addBtn" >
                    Add
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form>
        <div>
          <div>
            <label htmlFor="name">Name:</label>
            <input ref={nameIn} type="text" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input ref={emailIn} type="email" />
          </div>
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DataComp;
