import { useState, useEffect } from "react";
import { Alert, Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardMeteo = (props) => {
  const [meteo, setMeteo] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [disappear, setDisappear] = useState(true); //ma io solo adesso capisco la reale potenza dei booleani. Liv 999
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.city) return;
    setIsLoading(true);
    setDisappear(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=b425d1c0dd147f0e48723fb6517a4691`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((data) => {
        setMeteo(data);
        setIsError(false);
        setIsLoading(false);
        setDisappear(false);
      })
      .catch((error) => {
        console.error("Errore", error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [props.city]);

  return (
    <>
      <Container className="p-4">
        <Row className="justify-content-center">
          <Col xs={10} className="text-center text fs-2">
            {isLoading && (
              <>
                <Spinner animation="grow" size="sm" />{" "}
                <Spinner animation="grow" size="sm" />{" "}
                <Spinner animation="grow" size="sm" />
              </>
            )}
            {!isError && meteo && meteo.main && !disappear && (
              <>
                <p className="text">
                  In <span className="title fw-bold trill">{props.city}</span>... I see {meteo.weather[0].description}.
                </p>{" "}
                <p className="fs-3">
                  {(meteo.main.temp - 273.15).toFixed(1)}°C
                </p>
                <Button
                  className="border border-light fs-3 mt-3"
                  onClick={() => navigate(`/MeteoFive/${meteo.id}`)}>
                  Wanna dare the <span className="title fw-bold trill">future</span>?
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Container>

      {isError && (
        <>
          <Container className="p-5">
            <Row className="justify-content-center">
              <Col xs={10} className="text-center text-no-color fw-bold fs-4">
                <Alert variant="secondary">
                  I'm sorry, weary traveler... A mist shrouds thy heart and the
                  city's aura eludes my sight.
                </Alert>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
export default CardMeteo;
