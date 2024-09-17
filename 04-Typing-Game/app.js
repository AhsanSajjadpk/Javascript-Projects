const start = document.getElementById("start")
const home = document.getElementById("home")
const radioBtn = document.querySelectorAll('input[type="radio"]')


const infoLevel = document.getElementById("info-level")
const infoTime = document.getElementById("info-time")
const infoBonus = document.getElementById("info-bonus")

const gameLevelDOM = document.getElementById("game-level")
const gameScoreDOM = document.getElementById("game-score")
const gameTimeDOM = document.getElementById("game-time")

const resultLevel = document.getElementById("result-level")
const resultScore = document.getElementById("result-score")


const restart = document.getElementById("restart")
const randomWord = document.getElementById("randomWord")
const inputWord = document.getElementById("inputWord")



const words = ["velvet", "abundant", "cave", "dollar", "emphasis", "grace", "nomination", "texture", "beneficiary", "disaster", "glove", "spare", "wreck", "excess", "spy", "class", "disturbance", "panel", "get", "collar", "like", "value", "assault", "application", "growth", "declaration", "heat", "belt", "dressing", "Venus", "transmission", "mistreat", "inch", "gesture", "diet", "realism", "exaggerate", "string", "snake", "constant", "extract", "dump", "current", "shark", "bang", "decorative", "tower", "entry", "shake", "term", "basin", "mouth", "cycle", "snail", "ash", "monkey", "soul", "large", "root", "construct", "pension", "upset", "produce", "silver", "problem", "fragment", "session", "dimension", "snake", "freshman", "leaf", "spot", "personality", "hostage", "improvement", "porter", "doll", "circulation", "flexible", "appear", "prestige", "waist", "character", "clue", "interference", "miner", "message", "contact", "mixture", "pure", "distributor", "queen", "siege", "glue", "landscape", "economy", "maximum", "drift", "visit", "tender"]


// Variables

const rules = {

    easy: {
        time: 15,
        bonus: 5
    },
    medium: {

        time: 12,
        bonus: 3
    },
    hard: {
        time: 8,
        bonus: 2
    }

}

let difficulty = 'easy';
let gameTime = rules[difficulty].time;
let gameBonus = rules[difficulty].bonus;
let gameStarted = false;
let gameScore = 0;
let currentWord = null;
let word = ''






// Functions

// function to update info Dom

const updateInfoDom = function () {

    infoLevel.innerHTML = `${difficulty.charAt(0).toUpperCase()}${difficulty.slice(1)}`;
    infoTime.innerHTML = `${gameTime}s`;
    infoBonus.innerHTML = `+${gameBonus}s`;
}

// Update Game dom

const updateGameDom = () => {


    gameLevelDOM.innerHTML = `${difficulty.charAt(0).toUpperCase()}${difficulty.slice(1)}`
    gameScoreDOM.innerHTML = gameScore
    gameTimeDOM.innerHTML = `${gameTime}s`

    // console.log(difficulty)
    //     console.log(gameTime)
    //     console.log(gameBonus)
    // console.log("Start 2")

}

const generateRandomWord = () => {
    word = words[Math.floor(Math.random() * words.length)]
    randomWord.innerHTML = word
}


inputWord.addEventListener('input', (e) => {

    if (e.target.value === word) {
        gameScore += 10
        gameTime += gameBonus
        // console.log("here")
        updateGameDom()
        generateRandomWord()
        inputWord.value = ''
    }
})



const updateResultDom = () => {
    
  
    resultLevel.innerHTML = `${difficulty.charAt(0).toUpperCase()}${difficulty.slice(1)}`
    resultScore.innerHTML = gameScore
  

}



// Event Listeners

Array.from(radioBtn).forEach((btn) => {

    btn.addEventListener('change', (e) => {

        difficulty = e.target.id;
        gameTime = rules[difficulty].time;
        gameBonus = rules[difficulty].bonus;
        // console.log("Start")

        // console.log(difficulty)
        // console.log(gameTime)
        // console.log(gameBonus)

        updateInfoDom()
        updateGameDom()
    })

})





start.addEventListener('click', () => {
    updateGameDom()
    generateRandomWord()
    gameStarted = true;

    if (!home.classList.contains("game")) {
        home.classList.add("game")
        home.classList.remove("home")
    }
})

restart.addEventListener('click', () => {


    if (!home.classList.contains("home")) {
        home.classList.add("home")
        home.classList.remove("result")
         difficulty = 'easy';
         gameTime = rules[difficulty].time;
         gameBonus = rules[difficulty].bonus;
         gameStarted = false;
         gameScore = 0;
         currentWord = null;
         inputWord.value = ""
       
         document.getElementById('easy').checked = true;
         updateInfoDom()
         updateGameDom()
    }
})



// Init


// getInputWord()

 setInterval(() => {

    if (gameStarted) {
        gameTime--;
        updateGameDom()
        if (gameTime === 0) {
            // console.log("here")
            gameStarted = false
            home.classList.remove("game")
            home.classList.add("result")
            updateResultDom()
        }
    }



}, 1000)