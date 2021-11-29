import {useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Grafico from './components/Chart.js';
import SelectorList from './components/SelectorList.js';
import { GETAllCountries } from './resquestsFunctions/RequestsFunctions.js';
import { Container, Row,Col } from 'react-bootstrap';
export default function App() {
    const [countries, setCountries] = useState([])    
    const [country, setCountry] = useState("Algeria") 
    const [countriesList, setCountriesList] = useState(["Brazil"])

    const handleChange = (country)=>{
        setCountry(country)
    }

    useEffect(() => {
        GETAllCountries().then(data=> setCountries(data))
    }, []) 
    
    return (
        <div>   
            <Container fluid="md">
                <Row>
                    <Col style={{
                        height:"360px",
                        overflowY:"auto"}}>
                            <SelectorList countries={countries.sort()} onChange={handleChange} setCountriesList={setCountriesList}/>
                    </Col>
                    <Col >
                         <Grafico country={country} countriesList={countriesList}/>
                    </Col>
                </Row>
            </Container>         
            
           
          
        
        </div>
    )
}
