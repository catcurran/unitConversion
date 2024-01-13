/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let numToConvert = 0
let inM = 0
let inFt = 0
let inL = 0
let inGal = 0
let inK = 0
let inLbs = 0
const mTo = document.getElementById("m-to") 
const toFt = document.getElementById("to-ft") 
const ftTo = document.getElementById("ft-to") 
const toM = document.getElementById("to-m") 
const lTo = document.getElementById("l-to") 
const toGal = document.getElementById("to-gal") 
const galTo = document.getElementById("gal-to") 
const toL = document.getElementById("to-l")
const kTo = document.getElementById("k-to") 
const toLbs = document.getElementById("to-lbs") 
const lbsTo = document.getElementById("lbs-to") 
const toK = document.getElementById("to-k")

//create array, get input num 20, function get 6 conversions(3 dec), put in array, function render results

convertBtn.addEventListener("click", function getNum(){
    numToConvert = inputEl.value
    convert(numToConvert)
})

function convert(num){
    inFt = (num * 3.281).toFixed(3)
    inM = (num / 3.281).toFixed(3)
    inGal = (num * 0.264).toFixed(3)
    inL = (num / 0.264).toFixed(3)
    inLbs = (num * 2.204).toFixed(3)
    inK = (num / 2.204).toFixed(3)
    render()
}

function render(){
    mTo.textContent = numToConvert + " meters"
    toFt.textContent = inFt + " feet"
    ftTo.textContent = numToConvert + " feet"
    toM.textContent = inM + " meters"
    lTo.textContent = numToConvert + " liters"
    toGal.textContent = inGal + " gallons"
    galTo.textContent = numToConvert + " gallons"
    toL.textContent = inL + " liters"
    kTo.textContent = numToConvert + " kilograms"
    toLbs.textContent = inLbs + " pounds"
    lbsTo.textContent = numToConvert + " pounds"
    toK.textContent = inK + " kilograms"
}