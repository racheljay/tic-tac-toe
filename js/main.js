//selectors 
const main = document.querySelector("#main");
const xDiv = document.createElement('div');
const oDiv = document.createElement('div');
const header = document.createElement("h1");

//basic variables
const blankTile = "-",
      x = "X",
      o = "O";
let gameStatus = true;
let clickCount = 0;
let pickedTiles = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let xScore = 0,
    oScore = 0;

function init() {
    //create basic structures of the page
    //make header
    const headerRow = document.createElement("div");
    headerRow.setAttribute("class", "row text-center p-4");
    
    header.setAttribute("class", "col");

    //set header content and place
    header.innerHTML = "SHALL WE PLAY A GAME?";
    main.appendChild(headerRow).appendChild(header);

    //create score board
    const scoreRow = document.createElement('div');
    scoreRow.setAttribute('class', 'row p-2 d-flex justify-content-between text-center');
    scoreRow.setAttribute('id', 'score-board');
    xDiv.setAttribute('class', 'col-6');
    oDiv.setAttribute('class', 'col-6');
    xDiv.innerHTML = `PLAYER X: ${xScore}`;
    oDiv.innerHTML = `PLAYER O: ${oScore}`;
    main.appendChild(scoreRow).appendChild(xDiv);
    scoreRow.appendChild(oDiv);


    createBoard();

    //create button
    const btnRow = document.createElement('div');
    btnRow.setAttribute('class', 'row d-flex justify-content-center')
    const button = document.createElement("button");
    const button2 = document.createElement('button');
    button.setAttribute("class", "btn btn-danger btn-lg text-white m-2");
    button.setAttribute("id", "reset");
    button2.setAttribute("class", "btn btn-danger btn-lg text-white m-2");
    button2.setAttribute("id", "reset-score");
    button.innerHTML = "New Game";
    button2.innerHTML = "Reset Score";

    //Reset Game Button
    button.addEventListener("click", () => {
        //reset variables
        gameStatus = true;
        clickCount = 0;
        pickedTiles = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        header.innerHTML = "SHALL WE PLAY A GAME?";
        //erase and create new board and button
        let board = document.getElementById('board');
        board.remove();
        button.remove();
        createBoard();
        main.appendChild(btnRow).appendChild(button);
        btnRow.appendChild(button2);
    });

    //reset score button
    button2.addEventListener('click', () => {
         xScore = 0;
         oScore = 0;
         xDiv.innerHTML = `PLAYER X: ${xScore}`;
         oDiv.innerHTML = `PLAYER O: ${oScore}`;
    });

    //adding to the page is the last to thing to happen if you want to make changes
    main.appendChild(btnRow).appendChild(button);
    btnRow.appendChild(button2);
}

function createBoard() {
    //create board

    const board = document.createElement("div");
    board.setAttribute("class", "row d-flex justify-content-center text-center");
    board.setAttribute("id", "board")
    main.appendChild(board);
    //loop for making squares
    for (let i = 1; i <= 9; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "col-4 border border-info");
        square.setAttribute("id", i)

        square.addEventListener("click", click)

        square.innerHTML = blankTile;
        board.appendChild(square);
    }
}

init();

//manage state of game and disable after click

function click(e) {
    //start with X
    if (gameStatus == true) {

        if (clickCount === 0) {
            e.target.innerHTML = x;
            e.target.style.color = "white";
            //add position to picked tiles array
            pickedTiles[parseInt(e.target.id) - 1] = 3;
            e.target.removeEventListener('click', click);
            clickCount++;
            //X turn
        } else if (clickCount % 2 === 0) {
            e.target.innerHTML = x;
            e.target.style.color = "white";
            //add position to picked tiles array
            pickedTiles[parseInt(e.target.id) - 1] = 3;
            e.target.removeEventListener('click', click);
            clickCount++;
            //O turn
        } else if (clickCount % 1 === 0) {
            e.target.innerHTML = o;
            e.target.style.color = "white";
            //add position to picked tiles array
            pickedTiles[parseInt(e.target.id) - 1] = 5;
            e.target.removeEventListener('click', click);
            clickCount++;
        }
        if (clickCount >= 5) {
            checkWinner();
        }
    }

    console.log(`Click Count: ${clickCount}`);
    console.log(pickedTiles);

}

//win game logic

function checkWinner() {
    //possible solutions
    let sol = [
        pickedTiles[0] + pickedTiles[1] + pickedTiles[2],
        pickedTiles[3] + pickedTiles[4] + pickedTiles[5],
        pickedTiles[6] + pickedTiles[7] + pickedTiles[8],
        pickedTiles[1] + pickedTiles[4] + pickedTiles[7],
        pickedTiles[0] + pickedTiles[3] + pickedTiles[6],
        pickedTiles[2] + pickedTiles[5] + pickedTiles[8],
        pickedTiles[2] + pickedTiles[4] + pickedTiles[6],
        pickedTiles[0] + pickedTiles[4] + pickedTiles[8]
    ];
    //total for tie game
    let total = 0;
    //loop to add up tile total
    for (let i = 0; i < pickedTiles.length; i++) {
        total += pickedTiles[i];

    }
    console.log(total);
    //loop through win solutions
    for (var i = 0; i < 9; i++) {
        //determine x win
        if (sol[i] === 9) {
            header.innerHTML = "You Win:<br>PLAYER X";
            xScore++;
            xDiv.innerHTML = `PLAYER X: ${xScore}`;
            console.log(`Player X: ${xScore}`);
            gameStatus = false;
            break;
            //determine o win
        } else if (sol[i] === 15) {
            header.innerHTML = "You Win:<br>PLAYER O";
            oScore++;
            oDiv.innerHTML = `PLAYER O: ${oScore}`;
            console.log(`Player O: ${oScore}`);
            gameStatus = false;
            break;
        }
    }
    //in case of a tie:
    if (total === 35 && sol[i] !== 9) {
        header.innerHTML = "Sometimes we all loose"
        gameStatus = false;
    }


}
//pickedTiles = [0, 0, 0, 0, 0, 0, 0, 0, 0];



