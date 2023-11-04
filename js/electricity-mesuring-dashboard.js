import { firestoreDatabase } from "../database/firebaseFirestore.js";


// ************************************************************************************* save project name *************************************************************
let projectName = document.getElementById('newProjectName');

let loadProjectDetails = (name) => {

    firestoreDatabase.saveData('projectDetails', name);

    document.getElementById('project-name-title').textContent = name;
    document.getElementById('date').textContent = new Date().toLocaleDateString();
    // document.getElementById('start-time').textContent = new Date().toLocaleTimeString();
    document.getElementById('start-time').textContent = new Date().toLocaleTimeString();
}
document.getElementById('createNewProjectBtn').addEventListener('click', async () => {
    if (projectName.value !== '') {
        document.getElementById('project-name-save-outer').style.display = 'none'
        document.getElementById('mesuring-calculator-outer').style.display = 'block'
        await loadProjectDetails(projectName.value);


    } else {
        alert('Please enter Project Name');
    }


})

//*********************************************************************************** project start with limit cost ****************************************************
document.getElementById('createNewProjectBtnWith-limit').addEventListener('click', () => {

    if (projectName.value !== '') {
        document.getElementById('project-name-save-outer').style.display = 'none'
        document.getElementById('limit-cost-get-outer').style.display = 'flex'
    } else {
        alert('Enter Project Name');
    }




});

let limitationCost = document.getElementById('limit-cost-input-txt');
let temporyCost=0;


document.getElementById('limit-cost-input-btn').addEventListener('click', () => {

    if (limitationCost.value !== '') {
        firestoreDatabase.saveData('projectDetails', projectName.value);
        console.log(limitationCost.value);
        document.getElementById('limit-cost-get-outer').style.display = 'none';
        document.getElementById('limit-cost-project-inner').style.display = 'flex'

        document.getElementById('limit-project-name-title').textContent = projectName.value;
        document.getElementById('limit-date').textContent = `${new Date().getFullYear()}/${new Date().getMonth()+1}/${new Date().getDate()}`;
        document.getElementById('limit-start-time').textContent = new Date().toLocaleTimeString();

        setInterval( async ()=>{
            temporyCost += 10;
            document.getElementById('limit-cost').textContent = ` ${temporyCost} / ${limitationCost.value}`;
           
            if(temporyCost > limitationCost.value){
                await firestoreDatabase.updateData('projectDetails', projectName.value);
                alert('Your bughet over')
                location.href='../page/dashboard.html';
           

           
            }
        },1000);
        
        
        


       

    } else {
        alert("Enter Your Amount");
    }







});
// ********************************************************************************** project details ******************************************************************


// ********************************************************************************** area chart ******************************************************************

let options = {
    chart: {
        type: 'area'
    },
    series: [{
        name: 'Current',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
}

let chart = new ApexCharts(document.getElementById('area-chart'), options);
let limitChart = new ApexCharts(document.getElementById('limit-area-chart'), options);

chart.render();
limitChart.render();
// *************************************************************************************** navigate part ********************************************************
document.getElementById('end-project').addEventListener('click', async () => {
    console.log(projectName.value);
    await firestoreDatabase.updateData('projectDetails', projectName.value);


});