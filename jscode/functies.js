window.onload = function()
{
var aantal_keer =0;
var antwoord;
var aantal_goed=0;
var controle=false;
var aantal =0;
var vraagElement = document.getElementById('vraagId');
var controleBt = document.getElementById('controleBt');
var startBt = document.getElementById('startBt');
var antwElement = document.getElementById('antwIn');
var resultaat = document.getElementById('resultaat');
var uitslag = document.getElementById('uitslag');
var tellerEl = document.getElementById('teller');
var aantalGoedEl = document.getElementById('aantal_goed');
var radioMax1 = document.getElementById('max1');
var radioBew1 = document.getElementById('soort1');
var radioClass = document.getElementsByClassName ('radio');
var maxRd;
var soortRD;
var max;
var soortSom;
uitslag.style.visibility='hidden';
tellerEl.innerHTML = aantal_goed +" van 10" ;
controleBt.disabled = true;
antwElement.disabled = true;
radioMax1.checked = true;
radioBew1.checked = true;


controleBt.addEventListener('click',  function(){
    controle==false;
    controleren(antwoord, antwElement.value);
    setTimeout(volgende, 1000);

}, false);

//
 startBt.addEventListener('click',  function(){
     start();
 }, false);

antwElement.addEventListener('keypress', function(e){

if (e.keyCode == 13){
 if (controle=true) {
 	controleren(antwoord,antwElement.value);
  setTimeout(volgende, 700);
   }
}
}, false);

function start(){

// welke radio button max is checked voor max getal
var i=1;
 for (; i<7;i++){
//
   maxRd= document.getElementById('max'+i);

   if (maxRd.checked){
     max = maxRd.value;

    }
maxRd.disabled=true;
 }
//welke radio button max is checked voor bewerking
i=1;
for (; i<5;i++){
//
  soortRd= document.getElementById('soort'+i);

  if (soortRd.checked){
alert (soortRd.value);
  switch (soortRd.value) {
    case "optellen":
      soortSom="optellen";
      break;
  case "aftrekken":
    soortSom="aftrekken";
    break;
case "vermenigvuldigen":
  soortSom="vermenigvuldigen";
  break;
case "delen":
  soortSom="delen";
  break;
default:
    soortSom="optellen";
  }
   }
soortRd.disabled=true;

}
 for(i=0; i<radioClass.length; i++) {
      radioClass[i].style.color = "lightgray";
    }

radioClass.style.color = "green";
controleBt.disabled = false;
antwElement.disabled = false;

volgende();
}


function genereerGetal (max)
  {

return Math.floor(Math.random() * max+1);

  }

function volgende()

{

var a1=0;
var a2=0;

aantal = aantal +1;
uitslag.style.visibility='hidden';
antwElement.value ='';
vraagElement.innerHTML="";
a1 = genereerGetal(max);
a2 = genereerGetal(max);

if (soortSom == "optellen") {
vraagElement.innerHTML = a1 + "+" + a2 + "=";
antwoord= a1+a2;
}
if (soortSom == "aftrekken") {
vraagElement.innerHTML = a1 + "-" + a2 + "=";
antwoord= a1-a2;
}
if (soortSom == "vermenigvuldigen") {
vraagElement.innerHTML = a1 + "x" + a2 + "=";
antwoord= a1*a2;
}
if (soortSom == "delen") {
vraagElement.innerHTML = a1 + ":" + a2 + "=";
antwoord= a1/a2;
}
tellerEl.innerHTML = aantal + " van 10";
antwElement.focus();



  }

function controleren (uitkomst,antwoord) {

if (uitkomst == antwoord){
uitslag.setAttribute("class", "fa fa-check");
uitslag.style.color="lightgreen";
uitslag.style.visibility='visible';
aantal_goed =aantal_goed+1;
aantalGoedEl.innerHTML = "aantal sommen goed "+aantal_goed;
}
else
{
uitslag.setAttribute("class", "fa fa-times");
uitslag.style.color="red";
uitslag.style.visibility='visible';
}

}

}
