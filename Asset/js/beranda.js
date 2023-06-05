function mouseOver() {
  document.getElementById("box").style.fontSize = "20px";
}

function mouseOut() {
  document.getElementById("box").style.fontSize = "";
}



function mouseOver1() {
  document.getElementById("box1").style.fontSize = "20px";
}
  
function mouseOut1() {
  document.getElementById("box1").style.fontSize = "";
}

function mouseOver2() {
  document.getElementById("box2").style.fontSize = "20px";
}
  
function mouseOut2() {
  document.getElementById("box2").style.fontSize = "";
}

function mouseOver3() {
  document.getElementById("box3").style.fontSize = "20px";
}
function mouseOut3() {
  document.getElementById("box3").style.fontSize = "";
}

function mouseOver4() {
  document.getElementById("box4").style.fontSize = "20px";
}
  
function mouseOut4() {
  document.getElementById("box4").style.fontSize = "";
}

function mouseOver5() {
  document.getElementById("box5").style.fontSize = "20px";
}
  
function mouseOut5() {
  document.getElementById("box5").style.fontSize = "";
}

function mouseOver6() {
  document.getElementById("box6").style.fontSize = "20px";
}
  
function mouseOut6() {
  document.getElementById("box6").style.fontSize = "";
}

function mouseOver7() {
  document.getElementById("box7").style.fontSize = "20px";
}
  
function mouseOut7() {
  document.getElementById("box7").style.fontSize = "";
}

function mouseOver8() {
  document.getElementById("box8").style.fontSize = "20px";
}
  
function mouseOut8() {
  document.getElementById("box8").style.fontSize = "";
}

function submitForm(event) {
  event.preventDefault(); // Mencegah submit form pada halaman
  var input = document.getElementById("inputText").value;
  var query = " Puncak ratu ";
  var url = "https://www.google.com/search?q=" + query + input;
  window.open(url, '_blank');
}

//carousel
let counter = 1;
const x = document.getElementsByClassName('radio')
setInterval(function(){
    x[counter].checked = true;
    counter++;
    if(counter > 2){
        counter = 0;
    }
},5000);


const arrowBtn = document.getElementById("arrowBtn");
const sidebar = document.getElementById('sidebar');
arrowBtn.addEventListener('mouseenter', function () {
  sidebar.classList.toggle('active');
})


