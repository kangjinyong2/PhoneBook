import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
const Boxleft = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const itemPush = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, number } });
  };
  return (
    <div>
      <Form onSubmit={(event) => itemPush(event)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름"
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNumber">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="number"
            placeholder="전화번호"
            onChange={(event) => setNumber(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default Boxleft;
