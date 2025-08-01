import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";

const MeteoFive = () => {
  const { cityId } = useParams();
  const [meteo, setMeteo] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!cityId) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=b425d1c0dd147f0e48723fb6517a4691`
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
      })
      .catch((error) => {
        console.error("Errore", error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [cityId]);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text fs-3 text-center">
            <p>A vision comes to me!</p>
            {isLoading && (
              <>
                <Spinner animation="grow" size="sm" />{" "}
                <Spinner animation="grow" size="sm" />{" "}
                <Spinner animation="grow" size="sm" />
              </>
            )}
            {isError && (
              <Alert variant="secondary">
                Forgive me, seeker... I cannot divine the forecast for this
                place. The threads of fate are silent.
              </Alert>
            )}
            {meteo && meteo.city && (
              <>
                <p>
                  In {meteo.city.name}, such events are fated to unfold... It
                  shall be!
                </p>
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-5 py-5">
                  {meteo.list
                    .filter((item) => item.dt_txt.includes("15:00:00"))
                    .map((item, index) => (
                      <Col key={item.dt} className="mb-3">
                        <p>Day {index + 1}</p>
                        <p>{item.weather[0].description}</p>
                        <p>{(item.main.temp - 273.15).toFixed(1)}°C</p>
                        {item.rain ? `Rain: ${item.rain["3h"]} mm` : "No rain"}
                      </Col>
                    ))}
                </Row>
                {console.log(
                  meteo.list.filter((item) => item.dt_txt.includes("15:00:00"))
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MeteoFive;
