import { useEffect, useState } from "react";
import CardMeteo from "./CardMeteo";
import InputCity from "./InputCity";
import { Container } from "react-bootstrap";

const MeteoMain = () => {
  const [city, setCity] = useState(null);

  useEffect(() => {}, [city]);
  return (
    <>
      <Container>
        <InputCity city={city} setCity={setCity} />
        {city !== null && <CardMeteo city={city} />}
      </Container>
    </>
  );
};
export default MeteoMain;
