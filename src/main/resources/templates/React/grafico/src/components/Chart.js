import React, {useEffect,useState} from "react";
import { GET } from "../resquestsFunctions/RequestsFunctions";
import {Line} from 'react-chartjs-2'
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

export default function Grafico(){

    const [state, setstate] = useState([]);

    useEffect(() => {
        GET("Brazil").then((data) => setstate(data));
      }, []);  
     

    var labels = state.map((item,index)=>{
      if(index%30===0){
          return item.date;  
      }
  });
    // contém informações a respeito dos dados do grafico    
    const data = {
        labels: labels,
        datasets: [{
            label: "Brasil",
            data: state.map((item)=>{return  item.total_deaths}),
            fill: false,
            backgroundColor:'transparent',
            borderColor: 'rgb(255, 99, 132,)',
            tension: 10
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