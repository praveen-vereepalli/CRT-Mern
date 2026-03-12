const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

const apikey = "b6dbcffdf5dd4dfe7486f5a929d54594"
const searchBox = document.querySelector('.input');
const serachBtn = document.querySelector('button');

async function checkwheather(city) {
    var response = await fetch(apiUrl+ '&appid='+ apikey+'&q='+city);
    var data= await response.json();
    console.log(data);
    document.querySelector('.city').innerHTMl=data.name
    document.querySelector('.temperature').innerHTML=Math.round(data.main.temp)+'°C';
    
}