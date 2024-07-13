import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Disney from "./Components/Disney/Disney";
import StarWars from "./Components/StarWars/StarWars";
import Rick from "./Components/Rick/Rick";
import Rick2 from "./Components/Rick2/Rick2";
import Rick3 from "./Components/Rick3/Rick3";
import Rick4 from "./Components/Rick4/Rick4";

function App() {
  const [disneyData, setDisneyData] = useState([]);
  const [starWarsData, setStarWarsData] = useState([]);
  const [rickData, setRickData] = useState([]);
  const [rick2Data, setRick2Data] = useState([]);
  const [rick3Data, setRick3Data] = useState([]);
  const [rick4Data, setRick4Data] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.disneyapi.dev/character")
      .then((res) => setDisneyData(res.data.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => setStarWarsData(res.data.results))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        // console.log("ACA", res.data.results);
        setRickData(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((res) => setRick2Data(res.data.results))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get(" https://rickandmortyapi.com/api/episode")
      .then((res) => setRick3Data(res.data.results))
      .catch((error) => console.error(error));
  });

  useEffect(() => {
    axios
      .get(" https://rickandmortyapi.com/api/character")
      .then((res) => setRick4Data(res.data.results))
      .catch((error) => console.error(error));
  });

  return (
    <div className="App">
      {/* <Disney disneyDataProp={disneyData} /> */}
      {/* <StarWars starWarsProp={starWarsData} /> */}
      {/* <Rick rickDataProp={rickData} /> */}
      <Rick2 rick2DataProp={rick2Data} />
      <Rick3 rick3DataProp={rick3Data} />
      <Rick4 rick4DataProp={rick4Data} />
    </div>
  );
}

export default App;
