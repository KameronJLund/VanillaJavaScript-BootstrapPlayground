const playerOne = {
    value: 'X'
}

const playerTwo = {
    value: 'O'
}

let currentPlayer

let endGame = false

const clickedButtons = [false, false, false, false, false, false, false, false]

let winCountX = 0
let winCountO = 0


function init(event)
{  
    currentPlayer = playerOne
    const buttons = document.querySelectorAll('.game-button')

    buttons.forEach(button =>
    {
        button.addEventListener('click', () =>
        {
            if(clickedButtons.indexOf(button) === -1)
            {
                markSquare(button)

                endGame = checkWinStatus()

                currentPlayer = switchPlayer(currentPlayer)
            }

            else 
            {
                //error square
            }

            if (endGame != false)
            {
                buttons.forEach(button => 
                    {
                        if(clickedButtons[button.id] === endGame)
                        {
                        button.classList.add('marked-button')
                        }
                    })
            }
        })

        const reset = document.getElementById('reset-button')
        
        reset.addEventListener('click', () =>
        {
            freshGrid(buttons)
        })
        
    })
    
}

document.addEventListener('DOMContentLoaded', (event) =>
{
    init(event)
})

function markSquare(button) 
{
        button.innerText = currentPlayer.value
        clickedButtons[button.id] = currentPlayer.value
}

function switchPlayer(currentPlayer)
{
    const playerOneUI = document.getElementById('playerOne')
    const playerTwoUI = document.getElementById('playerTwo')

    if(currentPlayer === playerOne)
    {
        currentPlayer = playerTwo
        playerOneUI.classList.remove('playerActive')
        playerOneUI.classList.add('playerWaiting')
        
        playerTwoUI.classList.remove('playerWaiting')
        playerTwoUI.classList.add('playerActive')
        return currentPlayer
        
    }

    else if(currentPlayer === playerTwo)
    {
        currentPlayer = playerOne
        playerTwoUI.classList.remove('playerActive')
        playerTwoUI.classList.add('playerWaiting')
        
        playerOneUI.classList.remove('playerWaiting')
        playerOneUI.classList.add('playerActive')
        return currentPlayer
    }
}

function checkWinStatus()
{
    if(clickedButtons[0] === clickedButtons[1] && clickedButtons[1] === clickedButtons[2] && clickedButtons[2] != false)
    {
        return clickedButtons[0]
    }
    else if(clickedButtons[3] === clickedButtons[4] && clickedButtons[4] === clickedButtons[5] && clickedButtons[5] != false)
    {
        return clickedButtons[3]
    }
    else if(clickedButtons[6] === clickedButtons[7] && clickedButtons[7] === clickedButtons[8] && clickedButtons[8] != false)
    {
        return clickedButtons[6]
    }
    
    else if(clickedButtons[0] === clickedButtons[3] && clickedButtons[3] === clickedButtons[6] && clickedButtons[6] != false)
    {
        return clickedButtons[0]
    }
    else if(clickedButtons[1] === clickedButtons[4] && clickedButtons[4] === clickedButtons[7] && clickedButtons[7] != false)
    {
        return clickedButtons[1]
    }
    else if(clickedButtons[2] === clickedButtons[5] && clickedButtons[5] === clickedButtons[8] && clickedButtons[8] != false)
    {
        return clickedButtons[2]
    }

    else if(clickedButtons[0] === clickedButtons[4] && clickedButtons[4] === clickedButtons[8] && clickedButtons[8] != false)
    {
        return clickedButtons[4]
    }
    else if(clickedButtons[2] === clickedButtons[4] && clickedButtons[4] === clickedButtons[6] && clickedButtons[6] != false)
    {
        return clickedButtons[2]
    }

    else 
    {
        return false
    }
}

function freshGrid(buttons)
{
    if(endGame != false) 
    {
        winCountText = document.getElementById(endGame + '-win')
        if (endGame === 'X') 
        {
            winCountX ++
            winCountText.innerText = winCountX
        }
        else
        {
            winCountO ++
            winCountText.innerText = winCountO
        }
    }

    for (let i = 0; i < clickedButtons.length; i++)
    {
        clickedButtons[i] = false
    }
    
    buttons.forEach(button => 
    {
        button.innerText = ''
        button.classList.remove('marked-button')
        endGame = false
    })

    currentPlayer = switchPlayer(playerTwo)
}