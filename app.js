const body = document.querySelector("body")
const form = document.querySelector(".form")
const label = document.querySelector(".form__label")
const input = document.querySelector(".form__input")
const prewBtn = document.querySelector(".prew")
const nextBtn = document.querySelector(".next")
const roundWrapper = document.querySelector(".round-wrapper")

input.focus()

const colors = []
let count 

function select(param) {
    for (i = 0; i < colors.length; i++){
        roundWrapper.childNodes[i].classList.remove("round-toggle")
    }
    roundWrapper.childNodes[param].classList.add("round-toggle")
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let inputVal = input.value
    body.style.background = inputVal
    if (body.style.background == inputVal && inputVal != colors[colors.length - 1]) {
        colors.push(inputVal)  
        roundWrapper.innerHTML +=`<div style="background: ${inputVal}" class="round"></div>`
    }
    select(colors.length - 1)
     count = colors.length - 1
    form.reset()
})

prewBtn.addEventListener("click", () => {
    if (count > 0) {
        count--
        body.style.background = colors[count]
            
    }
    select(count)
})

nextBtn.addEventListener("click", () => {
    if (count < colors.length -1) {
        count++
        body.style.background = colors[count]
    }
    select(count)
})