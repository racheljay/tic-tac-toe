# tic-tac-toe

Requirements:

1. Make this board dynamically rendered
2. Render a lot of it in the JS
3. Some indication of who's turn it is
4. Game tile should only be clickable once
5. Game should declare the winner or else claim the game has resulted in a tie
6. Include a restart button that doesn't refresh the page just resets the game

# Render Logic:

    Create the page
        render header
        board
            tiles
        reset button

set the tiles to have 3 different states: [] [x] or [o]
on click state will change to either x or o and cannot be changed again
the click will change back and fourth depending on player

states = [_, X, O]
Player one - X  Player two - O

if click count is even {
    first square is x
    square is disabled
    add one to click count
}
if click count is odd {
    next square is O
    square disabled
    minus click count
}


}
init()
    -make the board
    -set the states to 0
    -set player one as active

state 0
    -all tiles say "_"
    -first click will be X

click tile
check game state
    how do we define state?
        -
what tile are we on?
who's turn is it?

# Game Win Logic

What are the winning combinations?
    -winningComos = [an array]
How do I know which ones have been selected
    -check the text content

compare the changed squres to the winning combos
stop the game if there is a winner, or stop the game if there is a tie

Win condition () {

}

# Game Logic group code
on tile click
- see if it's time to check win
    - check win
- set next player
- lock tile

on win
- [x, o, _
   x o _
- lock all tiles
- display winner

switchPlayer
    - state variable with count

display winner
- updates render header section
- updates render restart button

restartGame
- clear all variables