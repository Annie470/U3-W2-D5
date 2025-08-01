import { Container, Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <>
      <Container className="pt-5 px-5 mt-5">
        <Row className="gy-5">
          <Col xs={12} className="text fs-2 text-center">
            <p>Behold!</p>
            <p>Born of visions past, it takes shape upon a kindred project {' '}
                <span className="fw-bold title trill">Arc4num</span>, it still lingers in the mists of time.
            </p>
            <p>Soon, by fate’s decree, it shall transcend the web and be reborn in the realm of React Native.</p>
          </Col>
          <Col xs={12} className="text-center">
          <img className="fly w-25" src="public/TTPLogo.png" alt="Logo" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default About;
