const board = (()=>{

    const gameboard = [];

    const renderBoard = ()=>{
        for (let i = 1; i <= gameboard.length; i++) {
            let currentCell = document.getElementById(`cell${i}`).childNodes[1];
            currentCell.textContent = gameboard[i-1];
        }
    };

    const getGameBoardLength = ()=>{
        return gameboard.length
    }

    const updateGameboardArray=(symbol)=>{
        gameboard.push(symbol);
    }

    return {renderBoard,getGameBoardLength,updateGameboardArray}

})();


const Player = (name, symbol)=> {
    return {name, symbol}
};


const game = (()=>{
    const player1 = Player("Jim", "X");
    const player2 = Player("Bob", "O");

    let counter = 0;
    let currentActivePlayer = player1;

    addEventListener("click",(e)=>{
        const cellClicked = e.target;
        if (cellClicked.textContent.trim()==="" && cellClicked.classList.contains("cell")){
            cellClicked.textContent = currentActivePlayer.symbol;
            board.updateGameboardArray(currentActivePlayer.symbol)
            counter++;
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

})();


board.renderBoard();
