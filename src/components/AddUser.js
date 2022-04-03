import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>추가할 일</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="또 할게 있다고?"
        ></Input>
      </FormGroup>
      <Button type="submit">생성</Button>
      <Link to="/" className="btn btn-danger ml-2">
        취소
      </Link>
    </Form>
  );
};

export default AddUser;
