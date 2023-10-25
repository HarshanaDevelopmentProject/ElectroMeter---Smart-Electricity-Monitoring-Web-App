




let ipAddress = document.getElementById('ip-address');
let port = document.getElementById('port');




document.getElementById('connect-btn').addEventListener('click', async () => {
    if (ipAddress.value !== '' && port.value !== '') {




        ipAddress.value = '';
        port.value = '';

         window.location.href = '../page/electricity-mesuring-dashboard.html';


    } else {
        alert('Plese fill information !!!');
    }

});