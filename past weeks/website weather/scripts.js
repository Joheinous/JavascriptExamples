const outputDiv = document.querySelector("#output");

function listCities(citiesArray) {
  let outputList = document.querySelector("#cities");
  let theOption = document.createElement("option");
  theOption.value = "";
  theOption.textContent = "Choose a city...";
  outputList.appendChild(theOption);

  for (let i = 0; i < citiesArray.length; i++) {
    let theOption = document.createElement("option");
    theOption.value = citiesArray[i].rank;
    theOption.textContent = citiesArray[i].city;

    outputList.appendChild(theOption);
  }
}

function fetchCities() {
  fetch(
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
  )
    .then((response) => response.json())
    .then((jsoned) => listCities(jsoned));
}
fetchCities();

// const selectElement = document.querySelector("#cities");
// selectElement.addEventListener("change", displayCity());

let tableOutput = document.querySelector("#outputTable");

function displayWeather(array) {
  console.log(array);
  tableOutput.innerHTML = "";
  for (let i = 0; i < array.properties.periods.length; i++) {
    let row = tableOutput.insertRow(-1);

    let cell1 = row.insertCell(0);
    cell1.innerText = array.properties.periods[i].name;
    let cell2 = row.insertCell(1);
    cell2.innerText = array.properties.periods[i].temperature + " F";
    let cell3 = row.insertCell(2);
    cell3.innerText =
      array.properties.periods[i].windSpeed +
      " " +
      array.properties.periods[i].windDirection;
    let cell4 = row.insertCell(3);
    if (array.properties.periods[i].probabilityOfPrecipitation.value == null) {
      cell4.innerText = "No chance of precipitation.";
    } else {
      cell4.innerText =
        array.properties.periods[i].probabilityOfPrecipitation.value +
        "% chance of rain.";
    }
    let cell5 = row.insertCell(4);
    cell5.innerText = array.properties.periods[i].shortForecast;
  }
}

function fetchForecast(array) {
  let forecastURL = array.properties.forecast;
  fetch(forecastURL)
    .then((response) => response.json())
    .then((jsoned) => displayWeather(jsoned));
}

function fetchWeather(citiesArray, search) {
  let outputFilter = citiesArray.filter((a) => a.rank == search);
  console.log(outputFilter);
  let lat = outputFilter[0].latitude;
  let long = outputFilter[0].longitude;
  console.log(lat);
  fetch(`https://api.weather.gov/points/${lat},${long}`)
    .then((response) => response.json())
    .then((jsoned) => fetchForecast(jsoned));
}
listCities();

function fetchCities2(value) {
  fetch(
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
  )
    .then((response) => response.json())
    .then((jsoned) => fetchWeather(jsoned, value));
}


.onchange(fetchWeather(value))