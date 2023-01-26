const btn = document.querySelector('button')

btn.addEventListener('click', () => {

    let input = document.querySelector('input');
    let localidad = input.value;
    console.log(localidad)
    chequearClima(localidad);

})

async function chequearClima(localidad) {

    try {

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localidad}&APPID=3c086de3e37296dfa889363093719c81`)
        let clima = await response.json()
        
        console.log(clima)
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

    opcion_1.innerHTML = ''
    opcion_2.innerHTML = ''
    opcion_3.innerHTML = ''
    opcion_4.innerHTML = ''

    opcion_1.innerHTML = 'Se Siente'
    opcion_2.innerHTML = 'Humedad'
    opcion_3.innerHTML = 'Chance de Lluvia'
    opcion_4.innerHTML = 'Viento'

    let contenido_1 = document.createElement('h1');
    let contenido_2 = document.createElement('h1');
    let contenido_3 = document.createElement('h1');
    let contenido_4 = document.createElement('h1');
    
    contenido_1.textContent = `${clima.main.feels_like}`
    contenido_2.textContent = `${clima.main.humidity}`
    contenido_3.textContent = `${clima.main.pressure}`
    contenido_4.textContent = `${clima.wind.speed}`

    opcion_1.appendChild(contenido_1);
    opcion_2.appendChild(contenido_2);
    opcion_3.appendChild(contenido_3);
    opcion_4.appendChild(contenido_4);

}

function pupulateLeftContent(clima) {
    
    const left_content = document.querySelector('.left-content')

    left_content.innerHTML = ''

    let contenido_1 = document.createElement('h1');
    let contenido_2 = document.createElement('h3');
    let contenido_3 = document.createElement('h1');
    
    contenido_1.textContent = `${clima.weather[0].description}`
    contenido_2.textContent = `${clima.name}`
    contenido_3.textContent = `${clima.main.temp}`

    left_content.appendChild(contenido_1);
    left_content.appendChild(contenido_2);
    left_content.appendChild(contenido_3);

}

chequearClima('montevideo');