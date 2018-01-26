function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek){
  if (podatek) {
    var oprocentowanieOpodatkowane = oprocentowanie-0.19*oprocentowanie;
  }
  else {
  var oprocentowanieOpodatkowane = oprocentowanie;
  }
    console.log("----");
    console.log(okresKapitalizacji);
  var kapital = Math.pow(wplata*(1+oprocentowanieOpodatkowane/okresKapitalizacji),iloscLat*okresKapitalizacji);
  return (parseFloat(kapital)).toFixed(2);
}

function oblicz(){
  
  var wplata= parseInt(document.getElementById("wplata").value);
  var iloscLat= parseInt(document.getElementById("ilosc-lat").value);
  var okresKapitalizacji= parseInt(document.getElementById("okres-kapitalizacji").value);
  var oprocentowanie= parseInt(document.getElementById("oprocentowanie").value)/100;
  var podatek;
   if (document.getElementById('podatek').checked) {
            podatek=true;
        } else {
            podatek=false;
        }
  console.log(wplata);
  console.log(iloscLat);
  console.log(okresKapitalizacji);
  console.log(oprocentowanie);
  console.log(podatek);
  var wynik= obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
  document.getElementById("wynik").innerHTML = wynik;
}

