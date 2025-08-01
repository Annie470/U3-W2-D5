import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

const ZInput = (props) => {
  const [inputValue, setInputValue] = useState("");

  const forHero = (e) => {
    e.preventDefault();
    props.setName(inputValue);
    props.setUpHero(true);
    props.setUpInput(false);
  };

  return (
    <>
      <Container className="mb-5">
        <Form onSubmit={forHero}>
          <Form.Group controlId="form" className="text-center">
            <Form.Label className="text fs-3">What's your name?</Form.Label>
            <Form.Control
              className="w-50 mx-auto fs-4 fw-bold text-center title-no-color"
              type="text"
              placeholder=""
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default ZInput;
