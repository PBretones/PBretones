/* e0cd6518348ef801484d37f6e55ad838 */
const weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e0cd6518348ef801484d37f6e55ad838";
fetch(weatherAPI)
.then(function (resp) {return resp.json()})
.then(function(data){

    console.log(data);
    const card = document.querySelector("#mainCity h1");
    card.innerHTML =  data.name;
    const cityTemp = document.querySelector("#mainTemp");
    cityTemp.innerHTML = data.main.temp;
    const cityPressure = document.querySelector("#mainPressure");
    cityPressure.innerHTML = data.main.pressure;
    const cityStatus = document.querySelector("#mainStatus");
    cityStatus.innerHTML = data.weather[0].main;

})

.catch(function (){

});