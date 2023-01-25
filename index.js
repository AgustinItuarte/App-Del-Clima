async function chequearClima() {

    try {

        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=3c086de3e37296dfa889363093719c81')
        let clima = await response.json()
        console.log(clima)
        
    } catch (error) {

        alert(error);

    }
    

};

chequearClima();