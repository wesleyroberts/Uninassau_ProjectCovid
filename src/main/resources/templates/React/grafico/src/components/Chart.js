import React, {useEffect,useState} from "react";
import { GetByLocation } from "../resquestsFunctions/RequestsFunctions";
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

export default function Grafico({country,countriesList}){

    const [state, setstate] = useState([]);

    useEffect(() => {
        setstate(GetByLocation(countriesList))
      }, [countriesList]);  
     

    function lerLabels(item){
      let lista = [];
      item.forEach((element,index) => {
        if(index%30===0){
          lista.push(element.date);
        }
      });
      return lista;
    }

    function lerData(item){
      let lista = [];
      for (let index = 0; index < countriesList.length; index++) {            
            if(countriesList[index]==item.location){
              item.forEach((element,index) => {
                if(index%30===0){
                  lista.push(element.total_deaths);
                }
              });
                break;
            }       
        }
      return lista;
    }

    
  function createDataSets(array){  
    array.forEach((item)=>{
      return {
        label: item,
        data:lerData(state),
        fill: false,
        backgroundColor:'transparent',
        borderColor: 'rgb(255, 99, 132,)',
        tension: 0.1
        }
    })
  }
   

    // contém informações a respeito dos dados do grafico    
    const data = {
        labels: lerLabels(state),
        datasets: [createDataSets(countriesList)],
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
            <Line data = {data} options= {options}/>
        </div>
    );
}