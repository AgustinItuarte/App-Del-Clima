const btn = document.querySelector('.btn-buscar')
const btn_celsius = document.querySelector('.btn-celsius')
const btn_farengheit = document.querySelector('.btn-farengheit')


btn.addEventListener('click', () => {

    let input = document.querySelector('input');
    let localidad = input.value;

    chequearClima(localidad);

})

btn_celsius.addEventListener('click', () => {

    farengheitToCelsius();

})

btn_farengheit.addEventListener('click', () => {

    celsiusToFarengheit();

})

async function chequearClima(localidad) {

    try {

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localidad}&id=524901&lang=es&appid=3c086de3e37296dfa889363093719c81`)
        let clima = await response.json()
        
        pupulateRightContent(clima)
        pupulateLeftContent(clima)

    } catch (error) {

        alert(error);

    }

};

function pupulateRightContent(clima) {
    
    const opcion_1 = document.querySelector('.tiempo-1')
    const opcion_2 = document.querySelector('.tiempo-2')
    const opcion_3 = document.querySelector('.tiempo-3')
    const opcion_4 = document.querySelector('.tiempo-4')
    let icon_1 = document.createElement('img');
    let icon_2 = document.createElement('img');
    let icon_3 = document.createElement('img');
    let icon_4 = document.createElement('img');

    opcion_1.innerHTML = ''
    opcion_2.innerHTML = ''
    opcion_3.innerHTML = ''
    opcion_4.innerHTML = ''

    icon_1.src = 'icons/thermometer.svg'
    icon_2.src = 'icons/droplet.svg'
    icon_3.src = 'icons/cloud-drizzle.svg'
    icon_4.src = 'icons/wind.svg'

    opcion_1.appendChild(icon_1);
    opcion_2.appendChild(icon_2);
    opcion_3.appendChild(icon_3);
    opcion_4.appendChild(icon_4);

    opcion_1.innerHTML += 'Se Siente'
    opcion_2.innerHTML += 'Humedad'
    opcion_3.innerHTML += 'Presion Atmosferica'
    opcion_4.innerHTML += 'Viento'

    let contenido_1 = document.createElement('h1');
    let contenido_2 = document.createElement('h1');
    let contenido_3 = document.createElement('h1');
    let contenido_4 = document.createElement('h1');

    contenido_1.className = 'temp-right'
    
    contenido_1.textContent = `${Math.round(clima.main.feels_like - 273)}`
    contenido_2.textContent = `${clima.main.humidity}`
    contenido_3.textContent = `${clima.main.pressure}`
    contenido_4.textContent = `${clima.wind.speed}`
    contenido_1.textContent += ' ºC'
    contenido_2.textContent += ' %'
    contenido_3.textContent += ' hPa'
    contenido_4.textContent += ' m/s'

    opcion_1.appendChild(contenido_1);
    opcion_2.appendChild(contenido_2);
    opcion_3.appendChild(contenido_3);
    opcion_4.appendChild(contenido_4);

}

function pupulateLeftContent(clima) {
    
    const left_content = document.querySelector('.ul-1')

    left_content.innerHTML = ''

    let contenido_1 = document.createElement('li');
    let contenido_2 = document.createElement('li');
    let contenido_3 = document.createElement('li');
    let contenido_4 = document.createElement('li');
    let contenido_5 = document.createElement('li');
    let img = document.createElement('img');
    let date = new Date();

    contenido_1.className = 'estado'
    contenido_2.className = 'localizacion'
    contenido_4.className = 'temp'
    
    contenido_1.textContent = `${clima.weather[0].description}`
    contenido_2.textContent = `${clima.name}`
    contenido_3.textContent = date
    contenido_4.textContent = `${Math.round(clima.main.temp - 273)}`
    contenido_4.textContent += ' ºC'

    img.src = `http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`

    contenido_5.appendChild(img);
    left_content.appendChild(contenido_1);
    left_content.appendChild(contenido_2);
    left_content.appendChild(contenido_3);
    left_content.appendChild(contenido_4);
    left_content.appendChild(contenido_5);

}

function celsiusToFarengheit() {

    let temp_left = document.querySelector('.temp');
    let temp_right = document.querySelector('.temp-right');

    if (temp_left.textContent.includes('C')) {

        let temperatura_1 = temp_left.textContent[0] + temp_left.textContent[1];
        let temperatura_2 = temp_right.textContent[0] + temp_right.textContent[1];

        temp_left.textContent = '';
        temp_right.textContent = '';

        let new_temp_left = parseInt(temperatura_1) * 9 / 5 + 32;
        let new_temp_right = parseInt(temperatura_2) * 9 / 5 + 32;

        temp_left.textContent = Math.round(new_temp_left);
        temp_right.textContent = Math.round(new_temp_right);

        temp_left.textContent += ' ºF';
        temp_right.textContent += ' ºF';

    }
    
}

function farengheitToCelsius() {

    let temp_left = document.querySelector('.temp');
    let temp_right = document.querySelector('.temp-right');

    if (temp_left.textContent.includes('F')) {

        let temperatura_1 = temp_left.textContent[0] + temp_left.textContent[1];
        let temperatura_2 = temp_right.textContent[0] + temp_right.textContent[1];

        temp_left.textContent = '';
        temp_right.textContent = '';

        let new_temp_left = ((parseInt(temperatura_1) - 32) * 5) / 9;
        let new_temp_right = ((parseInt(temperatura_2) - 32) * 5) / 9;

        temp_left.textContent = Math.round(new_temp_left);
        temp_right.textContent = Math.round(new_temp_right);

        temp_left.textContent += ' ºC';
        temp_right.textContent += ' ºC';

    }
    
}

chequearClima('montevideo');