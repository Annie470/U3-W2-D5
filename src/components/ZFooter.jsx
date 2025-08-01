import { Container, Row, Col } from "react-bootstrap";

const ZFooter = () => {
  return (
    <>
      <Container fluid>
        <Row className="bg-primary text-end p-2">
          <Col xs={12}><h6 className="text m-0 fs-4">CatZilla &copy; {new Date().getFullYear()}</h6></Col>
        </Row>
      </Container>
    </>
  );
};
export default ZFooter;
