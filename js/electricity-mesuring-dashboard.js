import {setDoc, doc ,updateDoc} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import {db, saveProjectName} from "../environment/fireBaseConfigurationFile.js";


// ************************************************************************************* save project name *************************************************************
let projectName = document.getElementById('newProjectName');

let saveProject = (projectName) => {
    setDoc(doc(db, 'projectDetails', projectName), {
        projectname: projectName,
        date: new Date().toLocaleDateString(),
        startTime: new Date().toLocaleTimeString(),
    }).then(async () => {
        console.log('saved')


    }).catch(() => {
        console.log('error')
    });
};

let loadProjectDetails=(name)=>{
    saveProject(name);
    document.getElementById('project-name-title').textContent=name;
    document.getElementById('date').textContent=new Date().toLocaleDateString();
    document.getElementById('start-time').textContent=new Date().toLocaleTimeString();
}
document.getElementById('createNewProjectBtn').addEventListener('click', () => {
    if(projectName.value !==''){


        document.getElementById('project-name-save-outer').style.display='none'
        document.getElementById('mesuring-calculator-outer').style.display='block'
        loadProjectDetails(projectName.value);


    }else{
        alert('Please enter Project Name');
    }



})


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

chart.render();
// *************************************************************************************** navigate part ********************************************************
document.getElementById('end-project').addEventListener('click', async () => {
    console.log(projectName.value);
    await updateDoc(doc(db, 'projectDetails', projectName.value), {
        endTime: new Date().toLocaleTimeString()
    }).then(() => {
        console.log('end time send');
        location.href = '../page/dashboard.html'
    }).catch();


});