import React from "react";
import { Row, Col } from "react-bootstrap";
const RightItem = ({ item }) => {
  return (
    <div>
      <Row className="item">
        <Col lg={2}>
          <img
            width={50}
            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          />
        </Col>
        <Col lg={10}>
          <h5>{item?.name}</h5>
          <div>{item?.number}</div>
        </Col>
      </Row>
    </div>
  );
};

export default RightItem;
