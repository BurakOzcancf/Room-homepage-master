const card = document.querySelectorAll(".hero__card")
const link = document.querySelectorAll(".hero__link")
const menu = document.querySelector(".header__menu")
const nav=document.querySelector("nav")
const close=document.querySelector(".header__close")
const body=document.querySelector("body")

menu.addEventListener("click", () => {
    nav.classList.add("nav-menu")
    body.style.overflowY="hidden"

})
close.addEventListener("click", () => {
    nav.classList.remove("nav-menu")
    body.style.overflowY="scroll"
})
let index = 0

function slider(n) {
    for (i = 0; i < card.length; i++){
        card[i].classList.add("inactive")
        link[i].classList.add("link-inactive")
    }
    index += n
    if (index > card.length - 1) {
        index = 0
        card[index].classList.add("active")
        card[index].classList.remove("inactive")
        link[index].classList.add("link-active")
        link[index].classList.remove("link-inactive")
    }
    if (index < 0){
        index = card.length - 1
        card[index].classList.add("active")
        card[index].classList.remove("inactive")
        link[index].classList.add("link-active")
        link[index].classList.remove("link-inactive")
    }
    else {
        card[index].classList.add("active")
        card[index].classList.remove("inactive")
        link[index].classList.add("link-active")
        link[index].classList.remove("link-inactive")
    }
    console.log(index)
}


// setInterval(function () {
//     for (i = 0; i < card.length; i++){
//         card[i].style.display = "none"
//     }
//     index += 1
//     if (index > card.length - 1) {
//         index = 0
//         card[index].style.display = "flex"
//     }
//     if (index < 0) {
//         index = card.length - 1
//         card[index].style.display = "flex"
//     }
//     else {
//         card[index].style.display = "flex"
//     }
//     console.log(index)
// }, 5000)
/* I did not delete this function because I wanted
 to show my learning process */

 // let i=0
// function slider(n) {
//     i = i + n
//     if (i === 3) {
//         i = 0
//     }
//     if (i === -1) {
//         i=2
//     }
//     if (i === 0) {
//         cards[1].style.display = "none"
//         cards[2].style.display = "none"
//         cards[i].style.display = "flex"
//         return i
//     }
//     if (i === 1) {
//         cards[0].style.display = "none"
//         cards[i].style.display = "flex"
//         cards[2].style.display = "none"
//         return i
//     }
//     if (i === 2) {
//         cards[0].style.display = "none"
//         cards[i].style.display = "flex"
//         cards[1].style.display = "none"
//         return i
//     }
// }
