// All DOm Elements

const scoreDom = document.getElementById('score')
const start = document.getElementById('start')
const up = document.getElementById('upKey')
const left = document.getElementById('leftKey')
const down = document.getElementById('downKey')
const right = document.getElementById('rightKey')








// All required Variables
let snakeBody = ['41', '42', '43', '44']
let direction = 'right'
let food = '80'
let score = 0;






// All functions
// function to show snake on dom 

const showSnake = () => {
    const allBoxes = document.querySelectorAll('.box')
    allBoxes.forEach(box => {

        if (!box.classList.contains('food')) {
            box.className = 'box'
        }
    })

    snakeBody.forEach(snakeBox => {


        document.getElementById(snakeBox).className = 'box snake-body'

    })
}

// Function to move snake forward

const moveSnake = () => {
    // console.log(snakeBody)

    for (let i = 0; i < snakeBody.length - 1; i++) {
        snakeBody[i] = snakeBody[i + 1]

    }
    let head, headRow, headCol, nextHeadCol, nextHeadRow;

    switch (direction) {

        case 'left':

            head = snakeBody[snakeBody.length - 1]
            headRow = parseInt(head[0])
            headCol = parseInt(head[1])
            nextHeadCol = headCol === 0 ? 9 : headCol - 1;
            snakeBody[snakeBody.length - 1] = `${headRow}${nextHeadCol}`


            break;
        case 'right':

            head = snakeBody[snakeBody.length - 1]
            headRow = parseInt(head[0])
            headCol = parseInt(head[1])
            nextHeadCol = headCol === 9 ? 0 : headCol + 1;
            snakeBody[snakeBody.length - 1] = `${headRow}${nextHeadCol}`

            break;


        case 'up':

            head = snakeBody[snakeBody.length - 1]
            headRow = parseInt(head[0])
            headCol = parseInt(head[1])
            nextHeadRow = headRow === 0 ? 9 : headRow - 1;
            snakeBody[snakeBody.length - 1] = `${nextHeadRow}${headCol}`

            break;


        case 'down':
            head = snakeBody[snakeBody.length - 1]
            headRow = parseInt(head[0])
            headCol = parseInt(head[1])
            nextHeadRow = headRow === 9 ? 0 : headRow + 1;
            snakeBody[snakeBody.length - 1] = `${nextHeadRow}${headCol}`

            break;
    }



    showSnake();

}

// Function to generate food

const generateFood = () => {
    let valid = false;

    while (!valid) {
        valid = true
        food = `${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`

        snakeBody.forEach(snakePart => {
            if (food === snakePart) {
                valid = false
            }

        })
    }
    document.getElementById(food).className = 'box food'

}

// Function to show score on Dom

const showScore = () => {
    score++
    scoreDom.innerHTML = `${score}`
}



// All event Listener

window.addEventListener('keydown', (e) => {
    // console.log(e.key)
    switch (e.key) {
        case 'ArrowLeft':
            direction = direction === 'right' ? 'right' : 'left'
            break;
        case 'ArrowRight':
            direction = direction === 'left' ? 'left' : 'right'
            break;
        case 'ArrowUp':
            direction = direction === 'down' ? 'down' : 'up'
            break;
        case 'ArrowDown':
            direction = direction === 'up' ? 'up' : 'down'
            break;

    }
})

start.addEventListener('click', (e) => {

    start.style.display = 'none'
    document.getElementById('controls').style.display = 'block'
    clearInterval(interval)
    score = 0
    scoreDom.innerHTML = score
    snakeBody = ['41', '42', '43', '44']
    direction = 'right'
    startInterval()

})


// Control snake through buttons

up.addEventListener('click', (e) => {

    direction = direction === 'down' ? 'down' : 'up'

})
left.addEventListener('click', (e) => {

    direction = direction === 'right' ? 'right' : 'left'

})
down.addEventListener('click', (e) => {

    direction = direction === 'up' ? 'up' : 'down'

})
right.addEventListener('click', (e) => {

    direction = direction === 'left' ? 'left' : 'right'

})







// Init

showSnake()
generateFood()
let interval
function startInterval() {
    interval = setInterval(() => {

        moveSnake();


        // track if snake has eaten the food
        let head = snakeBody[snakeBody.length - 1]
        if (head === food) {
            showScore();
            generateFood();
            snakeBody.unshift('');
        }

        // track self bite


        snakeBody.forEach((part, index) => {

            if (part === head && index !== snakeBody.length - 1) {
                clearInterval(interval)

                let currentSnakeBody = Array.from(document.querySelectorAll('.snake-body'))
                currentSnakeBody.forEach((box) => {


                    box.className = 'box kill'
                    start.style.display = 'block'
                    document.getElementById('controls').style.display = 'none'
                })

            }

        })


    }, 200)

}




