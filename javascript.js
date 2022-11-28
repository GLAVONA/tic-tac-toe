const gameboard = (()=>{

    const gameboard = ["x","o","x","x","x","o","x","o","o"];

    const renderBoard = ()=>{
        for (let i = 1; i <= gameboard.length; i++) {
            let currentCell = document.getElementById(`cell${i}`).childNodes[1];
            currentCell.textContent = gameboard[i-1];
        }
    };
    return {renderBoard}

})();

gameboard.renderBoard();

const Player = ()=>{

}