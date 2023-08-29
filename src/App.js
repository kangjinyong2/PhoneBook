import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Boxleft from "./component/Boxleft";
import Boxright from "./component/Boxright";
function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col className="border-column">
            <Boxleft />
          </Col>
          <Col>
            <Boxright />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
