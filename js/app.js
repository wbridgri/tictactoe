class Game {
    // 1 build constructor  
    constructor () {
        //1a access DOM elements
        this.gameRestartBtn = document.getElementById('gameRestart')
        this.submitBtn = document.getElementById('submitBtn')
        this.gameStatus = document.getElementById('gameStatus')
        this.gameActive = true
        this.currentPlayer = 'X'
        this.xWins = document.getElementById('xWIns')
        this.oWins= document.getElementById('oWins')
        this.playerOne = document.getElementById('playerOne')
        this.playerTwo = document.getElementById('playerTwo')
        // 2a set win count
        this.winCount = {
            x: 0,
            o: 0
        }
        // 3a set game state
        this.gameState = [
            '', '', '',
            '', '', '',
            '', '', ''
        ]
        // 4a set WinningConditions
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5], 
            [6, 7, 8], 
            [0,3, 6], 
            [1, 4, 7],
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]         ]

        this.players = {
            player1: 'Player 1',
            player2: 'Player 2'

        }
    }
    //2 initializer
    init () {
        //setting player Text
        this.playerOne.innerText = this.players.player1
        this.playerTwo.innerText = this.players.player2

        this.handleCellClicked()
    }

    // 3 handle clicked cell
    handleCellClicked() {
        //grab cells
        const cells = document.querySelectorAll('.cell')

        cells.forEach(cell => {
            const cellIdx = parseInt(cell.getAttribute('data-cell-index'))
            //if cellIdx is not an empty string OR if gameASctive is false...
            cell.addEventListener('click', ()=> {
                if(this.gameState[cellIdx] != '' || !this.gameActive) {
                    return
                }

                this.handleCellPlayed(cell, cellIdx)
                this,this.resultValidation()
            })
        })
    }
    // 4 handle cell played
    handleCellPlayed(cell, idx) {
        
        // IMPERATIVE
        this.gameState[idx] = this.currentPlayer
        this.currentPlayer == 'X' ? cell.classList.add('red') : 
        cell.classList.add('blue')


        // DECLARATIVE
        // if(this.currentPlay == 'X') {
        //     cell.classList.add('red')
        // } else {
        //     cell.classList.add('blue')
        // }

        cell.innerText = this.currentPlayer
    }

    //5 resultValidation
    resultValidation() {
        let gameWon = false

        for(let i = 0; i <= 7; i++) {
            const win = this.winningConditions[i]
            // i = 0 => win == [0, 1, 2]

            let a = this.gameState[win[0]]
            let b =this.gameState[win[1]]
            let c = this.gameState[win[2]]

            if(a == '' || b == '' || c == '') {
                continue
            }

            if(a == b && b == c) {
                gameWon = true
                break
            }
        }
    }
}

const action = new Game()


action.init()

