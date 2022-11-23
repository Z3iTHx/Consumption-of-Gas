const gas95 = document.getElementById("gas95")
const gas98 = document.getElementById("gas98")
const diesel = document.getElementById("dieselON")
const dieselPlus = document.getElementById("dieselONPlus")
const lpg = document.getElementById("LPG")

const showResult = document.getElementById("overallCost")
const showKilometerResult = document.getElementById("kilometerCost")

const distanceBox = document.getElementById("distanceBox")
const priceBox = document.getElementById("priceBox")
const consumptionBox = document.getElementById("combustionBox")

let distance = document.getElementById("distance")
let price = document.getElementById("price")
let consumption = document.getElementById("combustion")

const button = document.querySelector("button")

button.addEventListener("click", mathThis)

const rightDistance = document.getElementById("rightDistance")
const leftDistance = document.getElementById("leftDistance")
const rightConsumption = document.getElementById("rightCombustion")
const leftConsumption = document.getElementById("leftCombustion")
const rightPrice = document.getElementById("rightPrice")
const leftPrice = document.getElementById("leftPrice")

gas95.addEventListener("click", gas95Fun)
gas98.addEventListener("click", gas98Fun)
diesel.addEventListener("click", dieselFun)
dieselPlus.addEventListener("click", dieselPlusFun)
lpg.addEventListener("click", lpgFun)

function gas95Fun() {
    price.value = 6.59
}

function gas98Fun() {
    price.value = 7.32
}

function dieselFun() {
    price.value = 7.79
}

function dieselPlusFun() {
    price.value = 8.14
}

function lpgFun() {
    price.value = 3.14
}


function mathThis() {
    let distance = document.getElementById("distance").value
    let price = document.getElementById("price").value
    let consumption = document.getElementById("combustion").value
    let priceResult = 0;
    let priceKilometer = 0;

    priceBox.innerHTML = price + " zł"
    consumptionBox.innerHTML = consumption + " l"
    distanceBox.innerHTML = distance + " km"

    priceResult = distance/100*price*consumption
    let priceShow = priceResult.toFixed(2)
    priceKilometer = priceShow / distance
    let priceShowKm = priceKilometer.toFixed(2)

    showResult.innerHTML = priceShow + " zł";
    showKilometerResult.innerHTML = priceShowKm + " zł"
}

rightDistance.addEventListener("click", distanceFunPlus)
leftDistance.addEventListener("click", distanceFunMinus)

rightConsumption.addEventListener("click", consumptionFunPlus)
leftConsumption.addEventListener("click", consumptionFunMinus)

rightPrice.addEventListener("click", priceFunPlus)
leftPrice.addEventListener("click", priceFunMinus)


function distanceFunPlus() {
    distance.stepUp(5)
}
function distanceFunMinus() {
    distance.stepDown(5)
}
function consumptionFunPlus() {
    consumption.stepUp()
}
function consumptionFunMinus(){
    consumption.stepDown()
}
function priceFunPlus() {
    price.stepUp()
}
function priceFunMinus() {
    price.stepDown()
}