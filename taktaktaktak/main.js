let element1 = document.createElement('div')
let element2 = document.createElement('h1')

element2.innerHTML = "hello world"

element2.classList.add('pcolor')

element2.addEventListener('mouseover', ()=> {
    element2.classList.remove('pcolor')
    element2.classList.add('color')
})

element2.addEventListener('mouseleave', ()=> {
    element2.classList.remove('color')
    element2.classList.add('pcolor')
})

document.body.appendChild(element1)
element1.appendChild(element2)

function kolor(nowykolor) {
    element3 = document.getElementById('el1')
    element3.style.color = nowykolor
}