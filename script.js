const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-value")

function convertValues() {
 const currencyValue = document.querySelector(".input-currency").value 
 const valueConvert = document.querySelector(".valuetop") //Valor em Real 
 const valueConverted = document.querySelector(".valuelow") //Valor em Dólar

 console.log(currencySelect.value)
 const realToday = 4.94
 const dolarToday = 5.2
 const euroToday = 6.2
 const libraToday = 6.04
 const bitcoinToday = 131277.17
 /*valueConvert.innerHTML = currencyValue -> Origem
 valueConverted.innerHTML = convertedValue -> Conversão */

if(currencySelect.value == "Dolar"){
  valueConverted.innerHTML = new Intl.NumberFormat("en-US",{
    style:"currency",
    currency: "USD"
  }).format(currencyValue / dolarToday)
}

if(currencySelect.value == "Euro"){
  valueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
    style:"currency",
    currency:"EUR"
  }).format(currencyValue /euroToday)
}

if(currencySelect.value == "Libra"){
    valueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
    style:"currency",
    currency:"GBP"
    }).format(currencyValue / libraToday)
}

if(currencySelect.value == "Bitcoin"){
  valueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
    style:"currency",
    currency:"BTC"
  }).format(currencyValue / bitcoinToday)
}

if(currencySelect.value == "Real"){
  valueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL"
  }).format(currencyValue)
}

 valueConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
   style: "currency",
   currency: "BRL"
 } ).format(currencyValue)
}


function changeCurrency() {
  let currencyName = document.getElementById("name")
  let image = document.querySelector(".logoimg")


  if(currencySelect.value =="Dolar"){
  currencyName.innerHTML = "Dólar Americano"
  image.src = "./Img/USA.png"
 }

 if(currencySelect.value =="Euro"){
  currencyName.innerHTML = "Euro"
  image.src = "./Img/euro.png"
 }
 
 if(currencySelect.value =="Libra"){
  currencyName.innerHTML = "Libra"
  image.src ="./Img/Libra.png"
 }

 if(currencySelect.value =="Bitcoin"){
  currencyName.innerHTML = "Bitcoin"
  image.src ="./Img/Bitcoin.png"
 }

 if(currencySelect.value =="Real"){
  currencyName.innerHTML = "Real"
  image.src ="./Img/Brasil.png"
 }

 convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)