/*
* Universidad del Valle de Guatemala
* Sistemas Web
* Carnet: 18893
* Sara Nohemi Zavala Gutierrez
* Otello Game
* */

/**
 *
 * @type {HTMLElement}
 */
const player = document.getElementById('player_turn');
/**
 *
 * @type {boolean}
 */
let texTurn = true;

/**
 *
 * @type {{game__board: number[][], player_t: boolean}}
 */
const APP_STATE = {
    player_t: true,

    game__board: [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,-1,1,0,0,0],
        [0,0,0,1,-1,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
};


/**
 *
 * @param row
 * @param column
 * @param state
 * @returns {HTMLButtonElement}
 */
const renderCoin = ({
    row,
    column,
    state
}) =>{
    const {player_t, game__board} = APP_STATE;
    const place = document.createElement('button');
    const coin = document.createElement('div');
    place.style.height = '50px';
    place.style.width = '50px';
    coin.style.width = '35px';
    coin.style.height = '35px';
    coin.style.border = 'thin solid black';

    switch (state) {

        case 0:
            place.onclick = () => {
                if (player_t){
                    game__board[row][column] = 1;
                    APP_STATE.player_t = !player_t;
                    root.innerHTML = '';
                    texTurn = !texTurn;
                    render(root, APP_STATE);

                }
                else if (!player_t){
                    game__board[row][column] = -1;
                    APP_STATE.player_t = !player_t;
                    root.innerHTML = '';
                    texTurn = !texTurn;
                    render(root, APP_STATE);
                }
            };
            break;

        case 1:
            coin.style.backgroundColor = 'White';
            coin.style.borderRadius = '25px';
            place.appendChild(coin);
            break;

        case -1:
            coin.style.backgroundColor = 'Black';
            coin.style.borderRadius = '25px';

            place.appendChild(coin);
            break;
    }
    return place;
};
/**
 * Function for thte player's turn
 */
const turn = () => {
    player.style.fontSize = '45px';
    player.style.float = 'right'
    player.style.top = '300px';
    player.style.right = '170px';
    player.style.color = 'white';
    if (texTurn === false){
        player.innerText = 'Black turn';
    }
    else if (texTurn === true){
        player.innerText = 'White turn';
    }
}
/**************************************************************************************************************888
 * @param mount
 * @param state
 */
const render = (mount, state) => {
    turn();
    const board_div = document.createElement('div');
    document.body.style.backgroundImage = "url(https://fondos.io/wp-content/uploads/2019/01/abstract-wallpapers-hd-1230.jpg)";
    board_div.style.backgroundColor = '#317520';
    board_div.style.width = '410px';
    board_div.style.padding = '50px';
    board_div.style.marginLeft = '410px';
    board_div.style.marginTop = '100px';
            state.game__board.map(
                (row_0, row
                ) =>
                    row_0.map((state, column
                    ) =>
                        renderCoin({row,column,state}))
                        .forEach
                        (coin =>
                            board_div.appendChild(coin)
                        )
            );

    mount.appendChild(board_div);
};


/**
 *
 * @type {HTMLElement}
 */
const root = document.getElementById('root');

/**
 * Run xD
 */
render(root, APP_STATE);



