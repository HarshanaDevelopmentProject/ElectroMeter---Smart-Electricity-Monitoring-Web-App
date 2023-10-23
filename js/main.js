let slider01 = 'https://img.freepik.com/free-photo/glowing-electric-light-igniting-filament-inspiring-creativity-generated-by-ai_188544-15736.jpg?size=626&ext=jpg&ga=GA1.1.2081802722.1694067941&semt=sph';
let slider02 = 'https://img.freepik.com/free-photo/composition-with-digital-tablet-electrician-work-items_169016-24255.jpg?size=626&ext=jpg&ga=GA1.1.2081802722.1694067941&semt=ais';
let slider03 = 'https://img.freepik.com/free-photo/wireless-internet-wifi-icon-concept_53876-31449.jpg?size=626&ext=jpg&ga=GA1.1.2081802722.1694067941&semt=ais';
let slider04 = 'https://img.freepik.com/free-photo/money-saving-jar-arrangement_23-2148793801.jpg?size=626&ext=jpg&ga=GA1.1.2081802722.1694067941&semt=ais';
let sliderTitle = document.getElementById('slider-text-title');
let sliderDesc = document.getElementById('slider-text-desc');

sliderImage = document.getElementById('slider-inner');

sliderImage.style.backgroundRepeat = 'no-repeat';
sliderImage.style.backgroundSize = 'cover'
sliderImage.style.backgroundPosition = 'center'

sliderImage.style.backgroundImage = "url('" + slider01 + "')"
let image_count = 1;
setInterval(() => {

    switch (image_count) {

        case 1:
            sliderImage.style.backgroundImage = "url('" + slider01 + "')";
            sliderTitle.textContent = 'Energy Consumption Trends';
            sliderDesc.textContent = 'Generate visual representations of consumption trends on the area chart. Use icons or images to highlight anomalies or noteworthy patterns in energy usage.';
            break;
        case 2:
            sliderImage.style.backgroundImage = "url('" + slider02 + "')";
            sliderTitle.textContent = 'NodeMCU Setup';
            sliderDesc.textContent = ' Generate an image that illustrates the correct placement and connections of the NodeMCU board with the energy meter. This will serve as a visual guide for users during the initial setup';
            break;
        case 3:
            sliderImage.style.backgroundImage = "url('" + slider03 + "')";
            sliderTitle.textContent = 'Web Dashboard';
            sliderDesc.textContent = ' Create images of the web interface, showing how the real-time data, area chart, and billing information are displayed. Ensure the design is clean and intuitive';
            break;
        case 4:
            sliderImage.style.backgroundImage = "url('" + slider04 + "')";
            sliderTitle.textContent = 'Control Icons';
            sliderDesc.textContent = 'Design a set of visually engaging icons for the control buttons on the web interface';
            break;
    }

    image_count++;
    if (image_count == 5) {
        image_count = 1;
    }


}, 2000)

document.getElementById('go-dashboard-btn').addEventListener('click', () => { window.location.href = 'page/dashboard.html' })
