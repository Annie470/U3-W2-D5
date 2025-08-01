import { useState } from "react";
import Hero from "./Hero";
import ZInput from "./ZInput";
import { Container } from "react-bootstrap";
import MeteoMain from "./MeteoMain"

const Home = () => {
  const [name, setName] = useState();
  const [upHero, setUpHero] = useState(false);
  const [upInput, setUpInput] = useState(true);
  return (
    <>
      <Container fluid className="bg-primary mt-5 pt-5 px-4">
        {upInput && (
          <ZInput
            setName={setName}
            setUpHero={setUpHero}
            upHero={upHero}
            setUpInput={setUpInput}
            upInput={upInput}
          />
        )}
        {upHero && <Hero name={name} />}
        <MeteoMain/>
      </Container>
    </>
  );
};

export default Home;
