import { firestoreDatabase, realTimeDatabase } from "../database/firebaseFirestore.js";

let currentKwh = 0;
let totalCost = 0;

let sendRealTimeDatabaseTime = []
let sendRealTimeDatabasePower = []

//************************************************************************************** connect to node mcu board part ***********************************************
let ipAddress = document.getElementById('ip-address');
let port = document.getElementById('port');


document.getElementById('connect-btn').addEventListener('click', async () => {
    if (ipAddress.value !== '' && port.value !== '') {
        // const webSocket = new WebSocket('ws://192.168.43.211:81'); // Replace with your NodeMCU's IP address
        createWebSocketConnection(ipAddress.value, port.value);
        ipAddress.value = '';
        port.value = '';

    } else {
        alert('Please fill node Mcu Board Information !!!');
    }

});

let createWebSocketConnection = (ipAddress, port) => {
    let webSocket = new WebSocket(`ws://${ipAddress}:${port}`);

    webSocket.onopen = function (event) {
        confirm('Connected...');
        document.getElementById('connect-outer').style.display = 'none'
        document.getElementById('project-name-save-outer').style.display = 'flex'
    };

    webSocket.onmessage = (message) => {
        currentKwh = message.data;
        sendRealTimeDatabaseTime.push(new Date().toLocaleTimeString())
        totalCost = currentKwh / 50;



    }

    webSocket.onerror = (event) => {
        alert('Your Connection lOST Try Again!!!');
        location.reload()
    }
}
// ************************************************************************************* area chart *************************************************************
let options = {
    chart: {
        type: 'area'
    },
    series: [{
        name: 'Power',
        data: sendRealTimeDatabasePower
    }],
    xaxis: {
        categories: sendRealTimeDatabaseTime
    }
}

let chart = new ApexCharts(document.getElementById('area-chart'), options);
// ************************************************************************************* save project name *************************************************************
let projectName = document.getElementById('newProjectName');

let loadProjectDetails = (name) => {

    firestoreDatabase.saveData('projectDetails', name);
    realTimeDatabase.saveData(projectName.value);

    document.getElementById('project-name-title').textContent = name;
    document.getElementById('date').textContent = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`;
    document.getElementById('start-time').textContent = new Date().toLocaleTimeString();
    setInterval(() => {
        document.getElementById('unit').textContent = `${currentKwh} kwh`
        document.getElementById('cost').textContent = `Rs : ${totalCost}`


        sendRealTimeDatabasePower.push(currentKwh);
        sendRealTimeDatabaseTime.push(new Date().toLocaleTimeString())
        realTimeDatabase.updateData(projectName.value, sendRealTimeDatabaseTime, sendRealTimeDatabasePower)



        chart.render();

    }, 1000)
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
// document.getElementById('createNewProjectBtnWith-limit').addEventListener('click', () => {
//
//     if (projectName.value !== '') {
//         document.getElementById('project-name-save-outer').style.display = 'none'
//         document.getElementById('limit-cost-get-outer').style.display = 'flex'
//     } else {
//         alert('Enter Project Name');
//     }
//
//
//
//
// });

// let limitationCost = document.getElementById('limit-cost-input-txt');
// let temporyCost=0;


// document.getElementById('limit-cost-input-btn').addEventListener('click', () => {
//
//     if (limitationCost.value !== '') {
//         firestoreDatabase.saveData('projectDetails', projectName.value);
//         console.log(limitationCost.value);
//         document.getElementById('limit-cost-get-outer').style.display = 'none';
//         document.getElementById('limit-cost-project-inner').style.display = 'flex'
//
//         document.getElementById('limit-project-name-title').textContent = projectName.value;
//         document.getElementById('limit-date').textContent = `${new Date().getFullYear()}/${new Date().getMonth()+1}/${new Date().getDate()}`;
//         document.getElementById('limit-start-time').textContent = new Date().toLocaleTimeString();
//
//         setInterval( async ()=>{
//             temporyCost += 10;
//             document.getElementById('limit-cost').textContent = ` ${temporyCost} / ${limitationCost.value}`;
//
//             if(temporyCost > limitationCost.value){
//                 await firestoreDatabase.updateData('projectDetails', projectName.value);
//                 alert('Your bughet over')
//                 location.href='../page/dashboard.html';
//
//
//
//             }
//         },1000);
//
//
//
//
//
//
//
//     } else {
//         alert("Enter Your Amount");
//     }
//
//
//
//
//
//
//
// });
// ********************************************************************************** project details ******************************************************************


// ********************************************************************************** area chart ******************************************************************

// let options = {
//     chart: {
//         type: 'area'
//     },
//     series: [{
//         name: 'Power',
//         data: sendRealTimeDatabasePower
//     }],
//     xaxis: {
//         categories: sendRealTimeDatabaseTime
//     }
// }
//
// let chart = new ApexCharts(document.getElementById('area-chart'), options);
// // let limitChart = new ApexCharts(document.getElementById('limit-area-chart'), options);
//
// chart.render();
// limitChart.render();
// *************************************************************************************** navigate part ********************************************************
document.getElementById('end-project').addEventListener('click', async () => {
    console.log(projectName.value);

    await firestoreDatabase.updateData('projectDetails', projectName.value, currentKwh, totalCost);



});




//
//
// const webSocket = new WebSocket('ws://192.168.43.211:81'); // Replace with your NodeMCU's IP address
//
// webSocket.onopen = function(event) {
//   console.log('WebSocket connection opened');
// };
//
// webSocket.onmessage = function(event) {
//
//     const messageDiv = document.getElementById('unit');
//     messageDiv.textContent= 'value '+ event.data;
//
//
//
//
// };
//
// webSocket.onerror = function(event) {
//   console.error('WebSocket error:', event);
// };
//
// webSocket.onclose = function(event) {
//   console.log('WebSocket connection closed');
// };
