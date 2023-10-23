let options = {
    chart: {
      type: 'area'
    },
    series: [{
      name: 'Current',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  let chart = new ApexCharts(document.getElementById('area-chart'), options);
  
  chart.render();

  document.getElementById('end-project').addEventListener('click' ,()=>{
   let confirmMessage= confirm('Are You Sure')
    if(confirmMessage){
      location.href='../page/dashboard.html'
    }
   l
  });