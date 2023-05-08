const result = document.querySelector(".result input")
const copyBtn = document.querySelector("#copy-btn")
const sliders = document.querySelectorAll(".wrapper input[type='range']")
// console.log(slider);
const rColor = document.getElementById("red")
const gColor = document.getElementById("green")
const bColor = document.getElementById("blue")


const generateColor = () => {
    let rColorValue = rColor.value
    let gColorValue = gColor.value
    let bColorValue = bColor.value

    let finalColor = `rgb(${rColorValue},${gColorValue},${bColorValue})`
    result.value = finalColor;
    document.body.style.background = finalColor
}

const copyColor = () => {
    result.select()
    // document.execCommand("copy")
    navigator.clipboard.writeText(result.value)
    copyBtn.innerHTML = "Copied"
    setTimeout(() => {
        copyBtn.innerHTML = "Copy Color"
    }, 1000)
}

sliders.forEach((slide) => {
    slide.addEventListener("input", generateColor)

})

window.addEventListener("load", generateColor)

copyBtn.addEventListener("click", copyColor)