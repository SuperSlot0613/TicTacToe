export default class GameView{

    constructor(){

    }

    updateBoard(game){
        this.updateTurn(game)
        const winningCombination=game.findWinningCombination();
        for(let i=0;i<game.board.length;i++)
        {
            const tile=document.querySelector(`.board_tile[data-index='${i}']`)
            // tile.textContent=game.board[i]

            tile.classList.remove("tile-winner")

            let tileType=game.board[i]=='X' ? "tile-X" : "tile-O";

            tile.innerHTML=`<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`

            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
            }
            
        }
    }

    updateTurn(game){
        let playerx=document.querySelector(".player-X");
        let playero=document.querySelector(".player-O");
        playerx.classList.remove("active")
        playero.classList.remove("active")

        if(game.turn=='X'){
            playerx.classList.add('active')
        }
        else
        {
            playero.classList.add('active')
        }

    }

    

}