let btn = document.getElementsByTagName("button")[0]
let resultBox = document.getElementsByClassName("show-result")[0]

const calc1 = (x, unit) => {
    if (unit == "m to km" || unit == "ml to l" || unit == "g to kg") {
        return x / 1000;
    } else {
        return x * 1000;
    }
}

const calc2 = (x, unit) => {
    if (unit == "m to cm") {
        return x * 100;
    }
    else {
        return x / 100;
    }
}

const calc3 = (x, unit) => {
    if (unit == "ft to in") {
        return x * 12;
    }
    else {
        return x / 12;
    }
}

btn.addEventListener("click", () => {
    let sel_unit = document.getElementsByName("units")[0].value
    let val = Number.parseFloat(document.querySelector(".value").value)
    let arr = Array.from(sel_unit)
    let unit = (arr.slice(arr.indexOf("to")-2,)).join("")
    if (isNaN(val)) {
        resultBox.innerHTML = `Invalid`
    }
    else {
        if (sel_unit == "m to cm" || sel_unit == "cm to m") {
            resultBox.innerHTML = calc2(val, sel_unit) + unit;
        }
        else if (sel_unit == "m to km" || sel_unit == "ml to l" || sel_unit == "g to kg" || sel_unit == "l to ml" || sel_unit == "km to m" || sel_unit == "kg to g") {
            resultBox.innerHTML = calc1(val, sel_unit) + unit
        } 
        else if (sel_unit == "in to ft" || sel_unit == "ft to in") {
            resultBox.innerHTML = calc3(val, sel_unit) + unit;
        }
    }
})