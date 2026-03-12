const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

const apikey = "b6dbcffdf5dd4dfe7486f5a929d54594"
const searchBox = document.querySelector('.input');
const serachBtn = document.querySelector('button');

async function checkwheather(city) {
    var response =await fetch(apiUrl+ '&appid='+ apikey+'&q='+city);
    var data=await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML=data.name
    document.querySelector('.temperature').innerHTML=Math.round(data.main.temp)+'°C';
    document.querySelector('.humidityValue').innerHTML=data.main.humidity+'%';
    document.querySelector('.speedValue').innerHTML=data.wind.speed+'km/h';
    document.querySelector('.temp img').innerHTML.src="assets/'+data.wheather[0].main.toLowerCase()+'.png';

}
searchBtn.addEventListener('Click',()=>{
    checkweather(searchBox.value);
})
    
