let resultBox = document.getElementsByClassName("show-result")[0]
let btn = document.getElementsByTagName("button")[0]
btn.addEventListener("click", () => {
    let exp = Array.from(document.getElementsByName("expression")[0].value)
        let expCount = 0;
        let errorMsg = document.getElementsByClassName("error")[0]
        let fir_exp = exp.slice(0, exp.indexOf("+")) || exp.indexOf("+") || exp.indexOf("*") || exp.indexOf("/") || exp.indexOf("x") || exp.indexOf("X")
        let sec_exp = exp.slice(exp.indexOf("+") + 1 || exp.indexOf("-") + 1 || exp.indexOf("*") + 1 || exp.indexOf("/") + 1 || exp.indexOf("x") + 1 || exp.indexOf("X") + 1,);
        fir_exp = fir_exp.join("")
        sec_exp = sec_exp.join("")
        fir_exp = Number.parseFloat(fir_exp)
        sec_exp = Number.parseFloat(sec_exp)
        exp.map((val) => {
            if (val == "*" || val == "/") {
                expCount++;
            }
        })
        if (exp.includes("+") || exp.includes("-") || exp.includes("*") || exp.includes("/") || exp.includes("x") || exp.includes("X")) {
            if (expCount > 1) {
                resultBox.innerHTML = "Sorry, i can't evaluate more than one term."
                resultBox.style.fontSize = '15px'
                errorMsg.hidden = false;
                resultBox.style.color = "495057";
            }
            else {
                if (exp.includes("+")) {
                    resultBox.innerHTML = `= ${fir_exp + sec_exp}`
                }
                else if (exp.includes("-")) {
                    resultBox.innerHTML = `= ${fir_exp - sec_exp}`
                }
                else if (exp.includes("*") || exp.includes("x") || exp.includes("X")) {
                    resultBox.innerHTML = `= ${fir_exp * sec_exp}`
                }
                else if (exp.includes("/")) {
                    resultBox.innerHTML = `= ${fir_exp / sec_exp}`
                }
                resultBox.style.fontSize = '2rem'
                errorMsg.hidden = true;
                resultBox.style.color = "#1a8fe3";
            }
        }
        else {
            resultBox.innerHTML = "Invalid"
            resultBox.style.color = "#495057";
        }
})