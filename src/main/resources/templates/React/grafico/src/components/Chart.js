import React, {useEffect,useState} from "react";
import { GetByLocation } from "../resquestsFunctions/RequestsFunctions";
import {Line} from 'react-chartjs-2'
import { Breadcrumb } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export default function Grafico({country}){
  
  const [state, setstate] = useState([]);

  useEffect(() => {
    GetByLocation(country).then((data) => setstate(data));
    }, [country]);  
    

    var labels = state.map((item,index)=>{
        if(index%30===0){
            return item.date;  
        }
    });

    function setLabel(){
      var array = []
      state.map((item,index)=>{
        if(index%30===0){
            array.push(item.date);  
      }});

        return array;
    }

    function setData(){
      var array = []
      state.map((item,index)=>{
        if(index%30===0){
            array.push(item.total_deaths);  
      }});

        return array;
    }
  // contém informações a respeito dos dados do grafico    
  const data = {
      labels: setLabel(),
      datasets: [{
          label: "Brasil",
          data: setData(),
          fill: false,
          backgroundColor:'transparent',
          borderColor: 'rgb(255, 99, 132,)',
          tension: 0.1
      },
  ],
  
};  
  //contém informçaões a respeito das caracteristicas do gráfico
  const options = {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
      
      },
  }

  return(
      <div>
          <h1>testando a bagaceira</h1>
           <Line data = {data} options= {options}/>
      </div>
  );
}