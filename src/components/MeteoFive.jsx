import { useParams } from "react-router-dom";

const MeteoFive = () => {
    const { cityId } = useParams();
    return (
        <>
            <h1 className="title">METEO FIVE</h1>
            <p className="text">City: {cityId}</p>
        </>
    );
};
export default MeteoFive;