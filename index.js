fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=3c086de3e37296dfa889363093719c81')
.then((response) => {
    console.log(response.json())
})

