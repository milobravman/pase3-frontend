document.addEventListener("DOMContentLoaded", ()=> {
    fetch("http://localhost:3000/monsters")
    .then(res => res.json())
    .then(console.log)
})