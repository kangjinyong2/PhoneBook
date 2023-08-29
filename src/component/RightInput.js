import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
const RightInput = () => {
  let [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const { contactList } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "USER_NAME", payload: { keyword } });
  };
  return (
    <div>
      <Form onSubmit={searchByName}>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="이름"
              onChange={(event) => setKeyword(event.target.value)}
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              찾기
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default RightInput;
