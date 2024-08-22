(function () {
    let screen = document.querySelector(".screen")
    let buttons = document.querySelectorAll(".btn")
    let clear = document.querySelector(".btn-clear")
    let equal = document.querySelector(".btn-equal")
    let allclear = document.querySelector(".btn-allclear")

    buttons.forEach(function (button) {
        button.addEventListener("click", (e) => {
            let value = e.target.dataset.num;
            screen.value += value
           
        })
    })
    equal.addEventListener("click", (e) => {
        if (screen.value === "") {
            screen.value = "Please Enter A Value"
        }
        else {
            let answer = eval(screen.value)
            screen.value = answer
        }
    })

    allclear.addEventListener("click", (e) => {
        screen.value = ""
    })
    clear.addEventListener("click", () => {
        screen.value = screen.value.slice(0, -1)
    })


})()
