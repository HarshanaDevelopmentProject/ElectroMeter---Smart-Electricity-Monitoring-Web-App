import { getDocs,collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import {db} from "../environment/fireBaseConfigurationFile.js";
// ********************************************************************* date and time part ************************************************************************
let date = document.getElementById('dashboard-date');
let time = document.getElementById('dashboard-time');

date.textContent = new Date().getFullYear() + '/' + ((new Date().getMonth()) + 1) + '/' + new Date().getDate();
setInterval(() => {
    time.textContent = new Date().toLocaleTimeString();
}, 1000);

// ********************************************************************** project search **************************************************************************
let searchProject = document.getElementById('project-search-text');
let project = document.getElementById('project-table');


// ***********************************************************************project details table *******************************************************************
document.addEventListener('DOMContentLoaded',async () => {
    const querySnapshot = await getDocs(collection(db, "projectDetails"));

    querySnapshot.forEach((details) => {
        let table = document.getElementById('project-table');
        let row = table.insertRow();
        row.insertCell(0).textContent = details.data().projectname
        row.insertCell(1).textContent = details.data().date
        row.insertCell(2).textContent = details.data().startTime
        row.insertCell(3).textContent = details.data().endTime
    });

});
// ******************************************************************* navigate part *******************************************************************************

document.getElementById('new-project-btn').addEventListener('click',()=>{
    location.href = '../page/connect-page.html';
});
