import Game from './Game.js'
import GameView from './GameView.js'


let game =new Game()
let gameView =new GameView()

let tiles=document.querySelectorAll(".board_tile")

tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
        // console.log('tile Clicked!',tile.dataset.index)
        onTileClick(tile.dataset.index)
    })
})

function onTileClick(i){
    //do somethings
    //make a move
    game.makeMove(i)
    //update board
    gameView.updateBoard(game)
}

document.querySelector(".restart").addEventListener("click",()=>{
    // console.log("New Game")
    onRestartClick()
})


function onRestartClick(){
    game=new Game();
    gameView.updateBoard(game)
}
gameView.updateBoard(game)


const checkbox=document.getElementById("checkbox")
const right=document.querySelector(".right")
const board=document.querySelector(".board")



checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle("dark")
})

