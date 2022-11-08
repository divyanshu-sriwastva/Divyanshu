let fir = document.getElementById("fir-table")
let sec = document.getElementById("sec-table")
let thi = document.getElementById("thi-table")
let fou = document.getElementById("fou-table")
let fif = document.getElementById("fif-table")
let six = document.getElementById("six-table")
let sev = document.getElementById("sev-table")
let eig = document.getElementById("eig-table")
let nin = document.getElementById("nin-table")
let body = document.getElementsByTagName("body")[0]
let ten = document.getElementById("ten-table")
let btn = document.getElementsByClassName("submit")[0]

btn.addEventListener("click", () => {
    let num = document.getElementsByName("number")[0].value
    num = Number.parseFloat(num)
    if (isNaN(num)) {
        null;
    }
    else {
        fir.innerHTML = `${num} x 1 = ${num * 1}`
        sec.innerHTML = `${num} x 2 = ${num * 2}`
        thi.innerHTML = `${num} x 3 = ${num * 3}`
        fou.innerHTML = `${num} x 4 = ${num * 4}`
        fif.innerHTML = `${num} x 5 = ${num * 5}`
        six.innerHTML = `${num} x 6 = ${num * 6}`
        sev.innerHTML = `${num} x 7 = ${num * 7}`
        eig.innerHTML = `${num} x 8 = ${num * 8}`
        nin.innerHTML = `${num} x 9 = ${num * 9}`
        ten.innerHTML = `${num} x 10 = ${num * 10}`
        body.style.height = '100%'
        btn.style.marginBottom = '3rem'
        function myFunction(x) {
            if (x.matches) { 
              document.body.style.padding = "4rem";
            }
          }
          
          var x = window.matchMedia("(min-width: 700px)")
          myFunction(x)
    }
})