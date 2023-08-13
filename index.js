const apiKey="899f21aa029fb7cd28ee5124ec4462d0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); 

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status== 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else{
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+ " km/h";

        if (data.weather[0].main=="Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main=="Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main=="Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist") {
            weatherIcon.src = "images/mist.png";
        }

        

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";


    }

    

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

});


document.addEventListener("keydown", function(event) {
    // Check if the pressed key is Enter
    if (event.key === "Enter") {
      // Simulate a click event by calling the button's onclick function
      if (typeof searchBtn.onclick === "function") {
        searchBtn.onclick();
      }
    }
  });
  
searchBtn.onclick = function() {
    // Define the action you want to perform when the button is "clicked"
    checkWeather(searchBox.value);

  };
  