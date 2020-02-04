/*
Universidad del Valle de Guatemala
Sara Nohemi Zavala Gutierrez
18893 -- Laboratorio 2
Febrero 05 de 2020
* */


// -1 black
// 1 white

//ROOT
const root = document.getElementById('root');

//DICCIONARY CREATED
const renderCoins =
    ({
         row,
         column,
         state
     }) => {
        const CoinsDicc = {
            row,
            column,
            state
        };

    };
//FIRST THE BACKGROUND AND THE GAME'S BOARD
const render = (mount) => {
    const board = document.createElement('div');
    document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/0c/96/b1/0c96b19dc89ffdaa7ff737cfc04a095f.png)";
    board.style.width = '600px';
    board.style.height = '600px';
    board.style.backgroundSize = '600px, 600px';
    board.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Reversiboard480.svg/200px-Reversiboard480.svg.png)";
    board.style.margin = '60px 425px';
    mount.appendChild(board);
};



const matrix={matriz : [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,1,-1,0,0,0],
        [0,0,0,-1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ],
    turno: 0}


render(root);



