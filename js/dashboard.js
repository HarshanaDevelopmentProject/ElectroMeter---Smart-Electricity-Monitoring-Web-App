// ********************************************************************* date and time part ************************************************************************
let date=document.getElementById('dashboard-date');
let time=document.getElementById('dashboard-time');

date.textContent=new Date().getFullYear()+'/'+((new Date().getMonth())+1)+'/'+new Date().getDate();
setInterval(()=>{
    time.textContent=new Date().toLocaleTimeString();
},1000);

// ********************************************************************** project search **************************************************************************
let searchProject=document.getElementById('project-search-text');
 let project=document.getElementById('project-table');

document.getElementById('project-search-btn').addEventListener('click',()=>{



});

// ******************************************************************* navigate part *******************************************************************************

document.getElementById('new-project-btn').addEventListener('click',()=>{location.href='../page/connect-page.html'});