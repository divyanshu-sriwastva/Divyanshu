let btn = document.getElementsByTagName("button")[0]
let resultBox = document.getElementsByClassName("show-result")[0]

btn.addEventListener("click", () => {
    let sel_unit = document.getElementsByName("units")[0].value
    let val = Number.parseFloat(document.querySelector(".value").value)
    let unit = sel_unit.slice(sel_unit.indexOf("o") + 2, sel_unit.indexOf("o") + 3)
    if (isNaN(val)) {
        resultBox.innerHTML = 'Invalid'
    }
    else {
        if (sel_unit == "Celsius to Fahrenheit") {
            resultBox.innerHTML = `${(val * 9 / 5) + 32} °${unit}`
        }
        else if (sel_unit == "Fahrenheit to Celsius") {
            resultBox.innerHTML = `${(val - 32) * 5 / 9} °${unit}`
        }
        else if (sel_unit == "Celsius to kelvin") {
            resultBox.innerHTML = `${val + 273.15 + unit}`
        }
        else if (sel_unit == "kelvin to Celsius") {
            resultBox.innerHTML = `${val - 273.15} °${unit}`
        }
    }
})