import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { users } from "./data.js";
import "./index.scss";
const DataComp = () => {
  // const [usersData, setUsersData] = useState(users);
  const [usersData, setUsersData] = useState(users);
  const [editId, seteditId] = useState("");
  const nameIn = useRef();
  const emailIn = useRef();

  // delete function
  const handleDelete = (e) => {
    let updateUsers = usersData.filter(
      (elem) => elem.id != e.target.parentElement.parentElement.id
    );
    setUsersData(updateUsers);
  };

  // edit function
  const handleEdit = (e) => {
    seteditId(e.target.parentElement.parentElement.id);
    usersData.forEach((element) => {
      if (element.id == e.target.parentElement.parentElement.id) {
        nameIn.current.value = element.name;
        emailIn.current.value = element.email;
      }
    });
  };

  // then edit submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    usersData.forEach((el) => {
      if (el.id == editId) {
        el.name = nameIn.current.value;
        el.email = emailIn.current.value;
      }
    });
    setUsersData([...usersData]);
  };

  // array add local strg
  const addLocalStorages = (e) => {
    usersData.forEach((el) => {
      if (el.id == e.target.parentElement.parentElement.id) {
        let usersObj = {
          id: el.id,
          name: el.name,
          email: el.email,
        };
        let array = JSON.parse(localStorage.getItem("Users")) ?? [];
        !array.some((el) => el.id == usersObj.id)
          ? localStorage.setItem("Users", JSON.stringify([...array, usersObj]))
          : alert("you did");
      }
    });
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
                  <button
                    className="addBtn"
                    onClick={(e) => addLocalStorages(e)}
                  >
                    Add Local
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form>
        <div>
          <h1>Edit Table</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              ref={nameIn}
              type="text"
              id="name"
              placeholder="edit name..."
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              ref={emailIn}
              type="email"
              id="email"
              placeholder="edit email..."
            />
          </div>
          <button className="submitBtn" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataComp;
