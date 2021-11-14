var location;
const selectCountry = document.getElementById("country-select");
selectCountry.addEventListener('change', e=>{
    e.preventDefault();
    console.log(selectCountry.value);
    location= selectCountry.value
})

   let labels = new Array;
   let mortes = new Array; 

   let select = document.getElementById('country');		
        fetch("http://localhost:8080/data/location/Brazil")
         .then(response => response.json())
          .then(data => data.forEach((element,index) => {
              if(index%20==0 ||index==0){
                labels.push(element.date)            
                mortes.push(element.total_deaths)
              }               
          }
    ))  
          
       

const ctx = document.getElementById('chart')

//type, Data e options
var chartGraph = new Chart(ctx,{
    type:'line',
    data:{
        labels: labels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor:'transparent',
            borderColor: 'rgb(255, 99, 132)',
            data: mortes,
            fill: false
         }]
},
    options:{
        elements:{
            line:{
                tension:0
            }
        },
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero: true
                }
            }]
        }
    }
})


