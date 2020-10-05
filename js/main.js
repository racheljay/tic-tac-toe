//selectors 
const main = document.querySelector("#main");


//basic variables
const blankTile = "_",
    x = "X",
    o = "O";
let tileState = 0;
let clickCount = 0;
let pickedTiles = [0, 0, 0, 0, 0, 0, 0, 0, 0];




function init() {
    //create basic structures of the page
    //make header
    const headerRow = document.createElement("div");
    headerRow.setAttribute("class", "row text-center");
    const header = document.createElement("h1");
    header.setAttribute("class", "col");

    //set header content and place
    header.innerHTML = "SHALL WE PLAY A GAME?";
    main.appendChild(headerRow).appendChild(header);

    createBoard();


    //create button

    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-danger text-white");
    button.setAttribute("id", "reset");
    button.innerHTML = "New Game";
    //when button is clicked
    button.addEventListener("click", () => {
        //reset variables
        clickCount = 0;
        pickedTiles = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        //erase and create new board and button
        let board = document.getElementById('board');
        board.remove();
        button.remove();
        createBoard();
        main.appendChild(button);
    });

    //adding to the page is the last to thing to happen if you want to make changes
    main.appendChild(button);
}

function createBoard() {

    //create board
    const board = document.createElement("div");
    board.setAttribute("class", "row");
    board.setAttribute("id", "board")
    main.appendChild(board);
    //loop for making squares
    for (let i = 1; i <= 9; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "tile col-4 border border-info");
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
    if (clickCount === 0) {
        e.target.innerHTML = x;
        //add score to picked tiles array
        pickedTiles[parseInt(e.target.id) - 1] = 3;
        //e.target.setAttribute('class', "tile col-4 border border-info x-selected")
        e.target.removeEventListener('click', click)
        clickCount++;
        //X turn
    } else if (clickCount % 2 === 0) {
        e.target.innerHTML = x;
        pickedTiles[parseInt(e.target.id) - 1] = 3;
        //e.target.setAttribute('class', 'tile col-4 border border-info x-selected')
        e.target.removeEventListener('click', click)
        clickCount++;
        //O turn
    } else if (clickCount % 1 === 0) {
        e.target.innerHTML = o;
        pickedTiles[parseInt(e.target.id) - 1] = 5;
        //e.target.setAttribute('class', "tile col-4 border border-info o-selected")
        e.target.removeEventListener('click', click)
        clickCount++;
    }
    if (clickCount >= 5) {
        checkWinner();
    }

    console.log(`Click Count: ${clickCount}`);
    console.log(pickedTiles);

}

//win game logic

function checkWinner() {
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
    let total = 0;

    for (let i = 0; i < pickedTiles.length; i++) {
        total += pickedTiles[i];

    }
    console.log(total);

    for (var i = 0; i < 9; i++) {
        if (sol[i] === 9) {
            alert('X WINS!!!!');
            break;
        } else if (sol[i] === 15) {
            alert('O WINS!!!!')
            break;
        } 
    }

    if (total === 35 && sol[i] !== 9) {
        alert('NO WIN FOR YOU')
    }


}
//pickedTiles = [0, 0, 0, 0, 0, 0, 0, 0, 0];



