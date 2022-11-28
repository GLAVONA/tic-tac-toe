const board = (()=>{

    let gameboard = ["","","","","","","","","",];

    const renderBoard = ()=>{
        for (let i = 1; i <= gameboard.length; i++) {
            let currentCell = document.getElementById(`${i}`);
            currentCell.textContent = gameboard[i-1];
        }
    };

    const getGameBoardLength = ()=>{
        return gameboard.length;
    }

    const updateGameboardArray=(index,symbol)=>{
        gameboard[index] = symbol;
    }

    const getBoardStatus = ()=>{
        return gameboard;
    }

    const restartGameboard= ()=>{
        gameboard = ["","","","","","","","","",];
        renderBoard();
    }

    return {renderBoard,getGameBoardLength,updateGameboardArray,getBoardStatus,restartGameboard}

})();


const Player = (name, symbol)=> {
    return {name, symbol}
};


const game = (()=>{
    const player1 = Player(prompt("Player 1 name:") || "Player 1", "X");
    const player2 = Player(prompt("Player 2 name:")|| "Player 2", "O");
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    let counter = 0;
    let currentActivePlayer = player1;

    addEventListener("click",(e)=>{
        const cellClicked = e.target;
        if (cellClicked.textContent.trim()==="" && cellClicked.classList.contains("cell") && !haveWinner()){
            cellClicked.textContent = currentActivePlayer.symbol;
            board.updateGameboardArray(cellClicked.id-1, currentActivePlayer.symbol)
            counter++;
            if(haveWinner())
            {
                alert(`${currentActivePlayer.name} won!`)
                counter = 0;
            }
            else if (counter === 9){
                alert("DRAAAAAAAW!")
                counter = 0;
            }

            switch (currentActivePlayer){
                case player1:
                    currentActivePlayer = player2;
                    break;
                case player2:
                    currentActivePlayer = player1;
                    break;
            }
        } 
    })

    const haveWinner = ()=>{
        const currentBoard = board.getBoardStatus();
        let gameWon = false;
        for (let i = 0; i < winConditions.length; i++) {
            const condition = winConditions[i];
            const cellA = currentBoard[condition[0]];
            const cellB = currentBoard[condition[1]];
            const cellC = currentBoard[condition[2]];

            if (cellA == "" || cellB == "" || cellC == "") {
                continue;                
            }
            if (cellA == cellB && cellB == cellC){
                gameWon = true;
                break;
            }            
        }
        return gameWon;
    }

    const resetGame = () =>{
        board.restartGameboard();
        currentActivePlayer = player1;
    }
    const newGameButton = document.getElementById("new-game");
    newGameButton.addEventListener("click",resetGame);    
})();