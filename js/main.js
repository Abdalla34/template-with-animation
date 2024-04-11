const btn = document.querySelector(".button")
let nav = document.querySelector(".navbar")

document.addEventListener('click', (e) => {
    if (e.target.className === 'menu-item-link') {
        console.log('test')
    } else {
        if (e.target.className === 'button' || e.target.className === 'button1') {
            nav.classList.toggle("d-none");
        } else {
            nav.classList.remove("d-none");
        }
    }
})