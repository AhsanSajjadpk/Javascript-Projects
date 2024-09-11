const player1Card = document.getElementById('player-1-card')
const player2Card = document.getElementById('player-2-card')
const message = document.getElementById('message')
const allBoxes = document.getElementsByClassName('box')


let board = [null, null, null, null, null, null, null, null, null]
let currentPlayer = 1
let winner = null;
// player2Card.className = "disable"

// All- Functions

const togglePlayer = () => {
    if(winner === null){

        currentPlayer = currentPlayer === 1 ? 2 : 1;
        message.innerHTML = `Player ${currentPlayer} Turn.`
    
        if (currentPlayer === 1) {
            player1Card.className = ""
            player2Card.className = "disable"
        }
        else {
            player1Card.className = "disable"
            player2Card.className = ""
        }
    }
}

// -----------------Function to update board

const updateBoard = () => {

    board.forEach((val, ind) => {

        if (val !== null) {
            document.getElementById(`${ind}`).innerHTML = val === 1 ?

                '<i class="fa-regular fa-circle checked-icons limegreen"></i>'
                :
                '<i class="fa-solid fa-x checked-icons tomato"></i>'
        }

    })

}

const matchWinSequence = (loc1, loc2, loc3) => {

    return board[loc1] === currentPlayer && board[loc2] === currentPlayer && board[loc3] === currentPlayer

}

const checkWinner = () => {

    if (matchWinSequence(0, 1, 2)) {
        message.innerHTML = `Player ${currentPlayer} Won.`
        winner = currentPlayer;
        winBoxes(0, 1, 2)
        return;
    }
    if (matchWinSequence(3, 4, 5)) {
        message.innerHTML = `Player ${currentPlayer} Won.`
        winner = currentPlayer;
        winBoxes(3, 4, 5)
        return;
    }
    if (matchWinSequence(6, 7, 8)) {
        message.innerHTML = `Player ${currentPlayer} Won.`
        winner = currentPlayer;
        winBoxes(6,7,8);
        return;
    }
    if (matchWinSequence(0, 3, 6)) {
        message.innerHTML = `Player ${currentPlayer} Won.`
        winner = currentPlayer;
        winBoxes(0, 3, 6)
        return;
    }
    if (matchWinSequence(1, 4, 7)) {
        message.innerHTML = `Player ${currentPlayer} Won.`
        winner = currentPlayer;
        winBoxes(1, 4, 7)
        return;
    }
    if (matchWinSequence(2, 5, 8)) {
        message.innerHTML = `Player ${currentPlayer} Won.`
        winner = currentPlayer;
        winBoxes(2, 5, 8)
        return;
    }
    if (matchWinSequence(0, 4, 8)) {
        message.innerHTML = `Player ${currentPlayer} Won.`
        winner = currentPlayer;
        winBoxes(0, 4, 8)
        return;
    }
    if (matchWinSequence(2, 4, 6)) {
        message.innerHTML = `Player ${currentPlayer} Won.`
        winner = currentPlayer;
        winBoxes(2,4,6)
        return;
    }

}




// -----------------Function to check Draw

const checkDraw = () => {


    let totalNullValues = 0;
    board.forEach(val =>{
        if(val === null){
            totalNullValues++;
        }
    })

    if(totalNullValues === 0 && winner === null){
        message.innerHTML = `Match Draw.`
        player1Card.className = ""
        player2Card.className = ""
    }

}

// function to highlight win boxes

const winBoxes = (box1,box2,box3)=>{

    document.getElementById(`${box1}`).classList.add('win')
    document.getElementById(`${box2}`).classList.add('win')
    document.getElementById(`${box3}`).classList.add('win')

}


// Event Listeners

// event listener to click on box on board

Array.from(allBoxes).forEach(box => {
    box.addEventListener('click', (e) => {

        if (!box.classList.contains('checked') && winner === null) {

            // console.log(e.target.id)
            box.classList.add("checked")
            // console.log(box.classList)
            board[e.target.id] = currentPlayer;
            updateBoard()
            checkWinner()
            togglePlayer();
            checkDraw();
        }
       
    })
});
