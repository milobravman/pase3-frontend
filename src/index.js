
const URL = "http://localhost:3000"

// Hey milo is pretty cool


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
    hideOrShow()
})

function renderPart(data) {
    
    let first = document.querySelector('#first')
    first.addEventListener('click', () => {
        if(data.part_type == 'head'){
        let partsDiv = document.querySelector("#partsList")
        let partImage = document.createElement("img")
        partImage.className = "img-thumbnail"
        partImage.src = data.image
        partsDiv.appendChild(partImage)   
        }
    })
    let second = document.querySelector('#second')
    second.addEventListener('click', () => {
        if(data.part_type == 'chest'){
        let partsDiv = document.querySelector("#partsList")
        let partImage = document.createElement("img")
        partImage.className = "img-thumbnail"
        partImage.src = data.image
        partsDiv.appendChild(partImage)   
        }
    })
    let third = document.querySelector('#third')
    third.addEventListener('click', () => {
        if(data.part_type == 'legs'){
        let partsDiv = document.querySelector("#partsList")
        let partImage = document.createElement("img")
        partImage.className = "img-thumbnail"
        partImage.src = data.image
        partsDiv.appendChild(partImage)   
        }
    })
    let fourth = document.querySelector('#fourth')
    fourth.addEventListener('click', () => {
        if(data.part_type == 'arm'){
        let partsDiv = document.querySelector("#partsList")
        let partImage = document.createElement("img")
        partImage.className = "img-thumbnail"
        partImage.src = data.image
        partsDiv.appendChild(partImage)   
        }
    })
    let fifth = document.querySelector('#fifth')
    fifth.addEventListener('click', () => {
        if(data.part_type == 'arm'){
        let partsDiv = document.querySelector("#partsList")
        let partImage = document.createElement("img")
        partImage.className = "img-thumbnail"
        partImage.src = data.image
        partsDiv.appendChild(partImage)   
        }
    })
}


// The monsters Data gets passed through a forEach so
// Data is one monster Obj
function monsterList (data) {
    let monsterUL = document.querySelector("#monsterList")
    let monsterLI = document.createElement('li')
    monsterLI.textContent = data.name
    monsterLI.style.color = "red"
    monsterUL.appendChild(monsterLI)
    
    monsterLI.addEventListener('click', () => {
        renderMonster(data)
    })
}

function renderMonster (data) {
    
    title = document.querySelector("#monster-name")
    title.innerText = data.name

    let head = document.querySelector("#head-div")
    let chest = document.querySelector("#chest-div")
    let legs = document.querySelector("#legs-div")
    let left_arm = document.querySelector("#leftArm-div")
    let right_arm = document.querySelector("#rightArm-div")


    data.parts.forEach(part => {
        if (part.part_type == "chest"){
            chest.innerHTML = `<img src=${part.image}>`
        } else if (part.part_type == "legs") {
            legs.innerHTML = `<img src=${part.image}>`
        }else if (part.part_type == "head") {
            head.innerHTML = `<img src=${part.image}>`
        }else if (part.part_type == "Larm") {
            left_arm.innerHTML = `<img src=${part.image}>`
        }else if (part.part_type == "Rarm") {
            right_arm.innerHTML = `<img src=${part.image}>`
        }else {
            console.log("error")
        }

    })
}

let partsDisplay = false

function hideOrShow() {
    let togglePartsBtn = document.querySelector("#show-parts")
    togglePartsBtn.addEventListener("click", () => {
        partsDiv = document.querySelector("#partsList")
        partsDisplay = !partsDisplay
        if (partsDisplay){
            partsDiv.style.display = "block";
        }else{
            partsDiv.style.display = "none"
        }
    })
}