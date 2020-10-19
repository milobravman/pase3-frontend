
const URL = "http://localhost:3000"

function fetchMonster() {
    fetch("http://localhost:3000/monsters")
    .then(res => res.json())
    .then(monsters => {
        monsters.forEach(monster => {
            monsterList(monster)
        })
    })
}

function fetchParts() {
    fetch("http://localhost:3000/parts")
    .then(res => res.json())
    .then(res => {
        res.forEach(part => {
            renderPart(part)
        })
    })
}

//fetch("http://localhost:3000/parts")
//.then(res => res.json())
//.then(partsData => renderParts(partsData))

document.addEventListener("DOMContentLoaded", ()=> {
    fetchMonster()
    fetchParts()
})

function renderPart(data) {
    let partsDiv = document.querySelector("#partsList")
    
    let partImage = document.createElement("img")
    partImage.src = data.image

    partsDiv.appendChild(partImage)    
}

function monsterList (data) {
    let monsterUL = document.querySelector("#monsterList")
    let monsterLI = document.createElement('li')
    monsterLI.textContent = data.name
    monsterUL.appendChild(monsterLI)
    
    monsterLI.addEventListener('click', renderMonster)
}

function renderMonster () {
    console.log('hi')
}