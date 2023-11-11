import {getDocs, collection, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import {db} from "../environment/fireBaseConfigurationFile.js";
import {firestoreDatabase} from "../database/firebaseFirestore.js";

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
document.getElementById('project-search-btn').addEventListener('click', async () => {
    const querySnapshot = await getDocs(collection(db, 'projectDetails'));
    querySnapshot.forEach((details) => {
        if (searchProject.value === details.data().projectname) {
            let projectTable = document.getElementById('project-table');

            for (let i = project.rows.length - 1; i >= 0; i--) {
                project.deleteRow(i);
            }

            let btn = document.createElement('button');
            btn.className = 'more-btn'
            btn.textContent = 'More'

            let row = projectTable.insertRow();
            let fireBaseNameTableName = row.insertCell(0).textContent = details.data().projectname
            row.insertCell(1).textContent = details.data().date
            row.insertCell(2).textContent = details.data().startTime
            row.insertCell(3).textContent = details.data().endTime
            row.insertCell(4).appendChild(btn)

            btn.addEventListener('click', () => {
                loadLastProjectDetails(fireBaseNameTableName);
            })

        }
    })
    searchProject.value = '';
});

// ***********************************************************************project details table *******************************************************************
document.addEventListener('DOMContentLoaded', async () => {


    const querySnapshot = await getDocs(collection(db, "projectDetails"));


    querySnapshot.forEach((details) => {
        let btn = document.createElement('button');

        btn.className = 'more-btn'
        btn.textContent = 'More'

        let table = document.getElementById('project-table');
        let row = table.insertRow();
        let fireBaseNameTableName = row.insertCell(0).textContent = details.data().projectname
        row.insertCell(1).textContent = details.data().date
        row.insertCell(2).textContent = details.data().startTime
        row.insertCell(3).textContent = details.data().endTime
        row.insertCell(4).appendChild(btn)

        btn.addEventListener('click', () => {

            loadLastProjectDetails(fireBaseNameTableName);
        })

    });

});
// ******************************************************************* navigate part *******************************************************************************

document.getElementById('new-project-btn').addEventListener('click', () => {
    location.href = '../page/electricity-mesuring-dashboard.html';
});

//******************************************************************** load project details one by one *************************************************************

document.getElementById('back-to-table-btn').addEventListener('click', () => {
    document.getElementById('last-project-details').style.display = 'none'
    document.getElementById('table-outer').style.display = 'block'


});

let loadLastProjectDetails = (project) => {
    document.getElementById('table-outer').style.display = 'none'
    document.getElementById('last-project-details').style.display = 'block'
    document.getElementById('latest-project-name').textContent = project;


    document.getElementById('delete-project-btn').addEventListener('click', async () => {

        let answer = confirm("Are You Sure Delete " + project);
        if (answer) {
            await firestoreDatabase.deleteData('projectDetails', project);
        } else {
            location.href = '../page/dashboard.html'
        }

    });

}




