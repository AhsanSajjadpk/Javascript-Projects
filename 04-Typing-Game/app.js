const start = document.getElementById("start")
const home = document.getElementById("home")
const restart = document.getElementById("restart")



start.addEventListener('click', ()=>{

    if(!home.classList.contains("game")){
        home.classList.add("game")
        home.classList.remove("home")
    }
})