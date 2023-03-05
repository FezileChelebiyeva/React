import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/row";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { uid } from "uid";

const ToDoComp = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editStatus, setEditStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [editId, setEditId] = useState("");

  const addTodoList = (e) => {
    if (inputValue) {
      setTodoLists([...todoLists, { todoid: uid(8), text: inputValue }]);
      setInputValue("");
    } else {
      setErrorMessage(true);
    }
  };

  const deleteToDoList = (e) => {
    let filteredToDo = todoLists.filter(
      (element) => element.todoid !== e.target.id
    );

    setTodoLists(filteredToDo);
  };

  const editToDoList = (e) => {
    setInputValue(e.target.parentElement.parentElement.children[0].innerText);
    setEditStatus(true);
    setEditId(e.target.id);
  };

  const editToDoListRow = (e) => {
    if (inputValue) {
      todoLists.forEach((element) => {
        if (element.todoid === editId) {
          element.text = inputValue;
        }
      });
      setEditStatus(false);
      setTodoLists([...todoLists]);
    } else {
      setErrorMessage(true);
    }
    setInputValue("");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={2}></Col>
          <Col xs={7}>
            <InputGroup>
              <Form.Control
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setErrorMessage(false);
                }}
                value={inputValue}
                placeholder="your todo..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                className={errorMessage && "border border-danger"}
              />
            </InputGroup>
            {errorMessage && <p className="text-danger">write something!</p>}
          </Col>
          <Col xs={1}>
            {editStatus ? (
              <Button variant="primary" onClick={(e) => editToDoListRow(e)}>
                Edit
              </Button>
            ) : (
              <Button variant="primary" onClick={(e) => addTodoList(e)}>
                Add
              </Button>
            )}
          </Col>
          <Col xs={2}></Col>
        </Row>
        {todoLists.map((list) => {
          return (
            <ListGroup className="my-2" key={list.todoid}>
              <Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    <p className="m-0">{list.text}</p>
                    <div className="d-flex gap-3">
                      <Button
                        id={list.todoid}
                        variant="danger"
                        onClick={(e) => deleteToDoList(e)}
                      >
                        Delete
                      </Button>
                      <Button
                        id={list.todoid}
                        variant="success"
                        onClick={(e) => editToDoList(e)}
                      >
                        Edit
                      </Button>
                    </div>
                  </ListGroup.Item>
                </Col>
                <Col xs={2}></Col>
              </Row>
            </ListGroup>
          );
        })}
      </Container>
    </div>
  );
};

export default ToDoComp;
