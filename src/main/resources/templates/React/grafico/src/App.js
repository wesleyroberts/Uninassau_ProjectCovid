import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectorList from "./components/SelectorList.js";
import {
  GetAllContinentsNames,
  GETAllCountries,
  GetByContinent,
} from "./resquestsFunctions/RequestsFunctions.js";
import { Container, Row, Col } from "react-bootstrap";
import { GetByLocation } from "./resquestsFunctions/RequestsFunctions.js";
import Chart from "./components/Chart.js";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountires, setSelectedCountires] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [continentList, setContinentList] = useState([]);
  const [selectContinent, setSelectContinent] = useState([]);
  const [dataType, setDataType] = useState("total_cases")
  const [labels, setlabels] = useState([]);
  const [filter, setFilter] = useState(true);

  function setDataCountry(response) {
    const array = [];
    response.forEach((item, index) => {
      if(dataType === "total_cases"){
      if (index % 30 === 0 && item.total_cases !== null) {
        array.push(item.total_cases);
      }}else{
        if (index % 30 === 0 && item.total_deaths !== null) {
          array.push(item.total_deaths);
        
      }}
    });

    return array;
  }

  // function setDataLabels(response) {
  //   const array = [];
  //   response.forEach((item, index) => {
  //     if (index % 30 === 0 && item.total_deaths !== null) {
  //       array.push(item.total_deaths);
  //     }
  //   });
  //   return array;
  // }

  function setDataContinent(response) {
    const array = [];
    response.forEach((item, index) => {
      if (index % 350 === 0 && item.total_deaths !== null) {
        array.push(item.total_deaths);
      }
    });

    return array.sort((a, b) => a - b);
  }
  //responsavel por criar os datasets usados no chart.js e assim gerar-mos as lines
  const fetchCountryData = async (country) => {
    const response = await GetByLocation(country);
    setDatasets([
      ...datasets,
      {
        label: country,
        data: setDataCountry(response),
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        tension: 0.1,
      },
    ]);
  };

  const fetchContinentData = async (continent) => {
    const response = await GetByContinent(continent);
    setDatasets([
      ...datasets,
      {
        label: continent,
        data: setDataContinent(response),
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        tension: 0.1,
      },
    ]);
  };

  //Adiciona e remove valores do meu selectCountries que e utilizado para adicionar os datasets para cada country dentor desse array.
  const handleChangeCheckBox = async (item) => {
    if (item.checked) {
      setSelectedCountires([...selectedCountires, item.value]);
      await fetchCountryData(item.value);
    } else {
      setSelectedCountires([
        ...selectedCountires.filter((i) => i !== item.value),
      ]);
      setDatasets(datasets.filter((dataset) => dataset.label !== item.value));
    }
  };

  //Adiciona e remove valores do meu slectContinets que e utilizado para adicionar os datasets por continet
  const handleChangeCheckBoxByContinent = async (item) => {
    if (item.checked) {
      setSelectContinent([...selectContinent, item.value]);
      await fetchContinentData(item.value);
    } else {
      setSelectContinent([...selectContinent.filter((i) => i !== item.value)]);
      setDatasets(datasets.filter((dataset) => dataset.label !== item.value));
    }
  };

  const handleChangeFilter = async (item) => {
    if (item.value == "country") {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };
  const handleChangeCasesOrDeaths = async (item) => {
   setDataType(item.value);
  };

  //usado para pegar os valores via get do banco de dados que retorna um array de String com os nomes dos paises
  useEffect(() => {
    GETAllCountries().then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    GetAllContinentsNames().then((data) => setContinentList(data));
  }, []);

  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col
            style={{
              height: "360px",
              overflowY: "auto",
            }}
          >
            <SelectorList
              countries={countries.sort()}
              continentList={continentList.sort()}
              selectedCountires={selectedCountires}
              filter={filter}
              handleChangeCheckBoxByContinent={handleChangeCheckBoxByContinent}
              handleChangeFilter={handleChangeFilter}
              handleChangeCheckBox={handleChangeCheckBox}
              handleChangeCasesOrDeaths={handleChangeCasesOrDeaths}
            />
          </Col>
          <Col>
            <Chart datasets={datasets} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
