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
    createNewMonster()
    hideOrShow()
})

function createNewMonster() {
    document.querySelector("#createMonsterBtn").addEventListener("submit", (e)=>{
        e.preventDefault()
        formHTML = e.target
        let monsterName = formHTML.querySelector("#Mname").value
        //let toPost = `name: ${monsterName}`
        //console.log(toPost)


        fetch("http://localhost:3000/monsters", {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: monsterName
            })
        }).then(r => r.json())
        .then(r => monsterList(r))

    })
}

function renderPart(data) {
    function listParts () {
        let partsDiv = document.querySelector("#partsList")
        let partImage = document.createElement("img")
        partImage.className = "img-thumbnail"
        partImage.src = data.image
        partsDiv.appendChild(partImage)
    }
    let first = document.querySelector('#first')
    first.addEventListener('click', () => {
        if(data.part_type == 'head'){
        listParts()  
        }
    })
    let second = document.querySelector('#second')
    second.addEventListener('click', () => {
        if(data.part_type == 'chest'){
        listParts()   
        }
    })
    let third = document.querySelector('#third')
    third.addEventListener('click', () => {
        if(data.part_type == 'legs'){
        listParts() 
        }
    })
    let fourth = document.querySelector('#fourth')
    fourth.addEventListener('click', () => {
        if(data.part_type == 'Rarm'){
        listParts() 
        }
    })
    let fifth = document.querySelector('#fifth')
    fifth.addEventListener('click', () => {
        if(data.part_type == 'Larm'){
        listParts()   
        }
    })
}

// The monsters Data gets passed through a forEach so
// Data is one monster Obj
function monsterList (data) {
    let monsterUL = document.querySelector("#monsterList")
    let monsterLI = document.createElement('li')
    let deleteBTN = document.createElement("span")


    monsterLI.textContent = data.name
    monsterLI.style.color = "red"
    monsterUL.appendChild(monsterLI)
    
    monsterLI.addEventListener('click', () => {
        renderMonster(data)
    })

    monsterUL.appendChild(deleteBTN)
    deleteBTN.innerText = "X"
    deleteBTN.style.color = "red"

    deleteBTN.addEventListener('click', () => {
        deleteMonster(data)
    })
}

function deleteMonster (data) {
    fetch(`http://localhost:3000/monsters/${data.id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
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
            chest.innerHTML = `<img style="height:200px; width:200px;" src=${part.image}>`
        } else if (part.part_type == "legs") {
            legs.innerHTML = `<img style = "height:200px; width:60px;"src=${part.image}>`
        }else if (part.part_type == "head") {
            head.innerHTML = `<img style = "height:100px; width:100px;" src=${part.image}>`
        }else if (part.part_type == "Larm") {
            left_arm.innerHTML = `<img style = "height:60px; width:200px;" src=${part.image}>`
        }else if (part.part_type == "Rarm") {
            right_arm.innerHTML = `<img style = "height:60px; width:200px;" src=${part.image}>`
        }else {
            console.log("error")
        }

    })
}


let partsDisplay = false

function hideOrShow() {
    let togglePartsBtn = document.querySelector("#create-monster")
    togglePartsBtn.addEventListener("click", () => {
        partsDiv = document.querySelector("#createMonsterBtn")
        partsDisplay = !partsDisplay
        if (partsDisplay){
            partsDiv.style.display = "block";
        }else{
            partsDiv.style.display = "none"
        }
    })
}
