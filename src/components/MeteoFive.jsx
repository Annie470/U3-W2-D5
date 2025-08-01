import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MeteoFive = () => {
    const { cityId } = useParams();
  const [meteo, setMeteo] = useState("");
  const [isError, setIsError] = useState(false);

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
          })
          .catch((error) => {
            console.error("Errore", error);
            setIsError(true);
          });
      }, []);
    


    return (
        <>
            <h1 className="title">METEO FIVE</h1>
            <p className="text">City: {cityId}</p>
        </>
    );
};
export default MeteoFive;