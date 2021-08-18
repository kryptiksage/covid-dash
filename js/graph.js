function selected(dated,confirmed,recovered,deceased)
    {
var spreadCanvas = document.getElementById("spreadChart");
var lineChart = new Chart(spreadCanvas, {
  type: 'line',
  data:{
  labels:dated,
  datasets:[{
    label: "Confirmed",
    data: confirmed,
    
    borderColor: 'red'
  },
  {
    label: "Recovered",
    data:recovered,
    
  
  borderColor: 'blue'
  },
  {
    label: "Deceased",
    data:deceased,
    
  
  borderColor: 'yellow'
  }]},
  options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }

  
});
    }
   









    





    
  





    
  










  


   
