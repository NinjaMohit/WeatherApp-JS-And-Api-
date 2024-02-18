/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90ple091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)
.then(response=>response.json())
.then(response=>console.log(response))
.catch(err=>console.error(err));
*/
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c60d7fc2d4msh8c847943f2318fdp19808ejsne8077d961204',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city,options)
//fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +Shanghai,options)
//fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +Mumbai,options)
//fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +Pune,options)
//fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +Kolkata,options)

.then(response=>response.json())
.then(response=>{
    
    console.log(response)
    //cloud_pct.innerHTML=response.cloud_pct
    feels_like.innerHTML=response.feels_like
    humidity.innerHTML=response.humidity
   humidity2.innerHTML=response.humidity
    max_temp.innerHTML=response.max_temp
    min_temp.innerHTML=response.min_temp
    sunrise.innerHTML=response.sunrise
    sunset.innerHTML=response.sunset
    temp.innerHTML=response.temp
    temp2.innerHTML=response.temp
    wind_degrees.innerHTML=response.wind_degrees
    wind_speed.innerHTML=response.wind_speed
    wind_speed2.innerHTML=response.wind_speed

    feels_like3.innerHTML=response.feels_like
    humidity3.innerHTML=response.humidity
    max_temp3.innerHTML=response.max_temp
    min_temp3.innerHTML=response.min_temp
    sunrise3.innerHTML=response.sunrise
    sunset3.innerHTML=response.sunset
    temp3.innerHTML=response.temp
    wind_degrees3.innerHTML=response.wind_degrees
    wind_speed3.innerHTML=response.wind_speed

})
.catch(err=>console.error(err));

}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi");