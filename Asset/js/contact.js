const angin = document.querySelector('.angin');
const cuaca = document.querySelector('.cuaca');
const suhu = document.querySelector('.suhu');
const icon = document.querySelector('.icon');
const apiKey = '4a98121e2575fcc720582d599b967b3b';

let lat = -7.0270496;
let lon = 113.4882264;
let cuacaNow = {};

let xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`, true);
xhr.responseType = 'text';
xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
        cuacaNow = JSON.parse(xhr.responseText);
        populalate();
    } else {
        cuaca.innerHTML = 'error';
    }
}, false);

xhr.send();

function populalate() {
    let loc = cuacaNow.name;
    let temp = cuacaNow.main.temp;
    let wind = cuacaNow.wind.speed;
    let wea = cuacaNow.weather[0].description;
    let ikon = cuacaNow.weather[0].icon;

    angin.innerHTML = `Kec.Angin : ${wind}`;
    cuaca.innerHTML = `Cuaca : ${wea}`;
    suhu.innerHTML = `Suhu : ${temp} ºc` ;
    icon.src = `https://openweathermap.org/img/wn/${ikon}.png`;
}