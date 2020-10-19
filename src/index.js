
const URL = "http://localhost:3000"

function fetchMonster() {
    fetch("http://localhost:3000/monsters")
    .then(res => res.json())
    .then(console.log)
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
    partsDiv = document.querySelector("#partsList")
    
    let partImage = document.createElement("img")
    partImage.src = data.image

    partsDiv.appendChild(partImage)

    
    
}