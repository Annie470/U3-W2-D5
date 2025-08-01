import { useEffect, useState } from "react";
import CardMeteo from "./CardMeteo";
import { Container,Row, Col } from "react-bootstrap";

const Hero = (props) => {
  const [ip, setIp] = useState("");
  const [geo, setGeo] = useState(null);
  const [isError, setIsError] = useState(false);

  const endpoint = "http://ip-api.com/json/";
  const chiamageo = (ipAddress) => {
    fetch(endpoint + ipAddress)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati geolocalizzati");
        }
      })
      .then((data) => {
        setGeo(data);
      })
      .catch((error) => {
        console.error("Errore nella geolocalizzazione:", error);
        setIsError(true);
      });
  };

  const getIP = () => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero IP");
        }
      })
      .then((data) => {
        setIp(data.ip);
        chiamageo(data.ip);
      })
      .catch((error) => {
        console.error("Errore nel recupero IP:", error);
        setIsError(true);
      });
  };

  useEffect(() => {
    getIP();
  }, []);

  return (
    <>
      {isError || !geo ? (
        <Container className="p-4">
            <Row className="justify-content-center">
              <Col xs={10} className="text-center text fs-2">
                <p>
                  Hello, <span className="title fw-bold">{props.name}</span>
                </p>
              </Col>
            </Row>
          </Container>
      ) : (
        <>
          <Container className="p-4">
            <Row className="justify-content-center">
              <Col xs={10} className="text-center text fs-2">
                <p>
                  Hello, <span className="title fw-bold"> {props.name}</span> from {geo.city}
                </p>
                <CardMeteo city={geo.city} />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Hero;
