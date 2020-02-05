const renderCoin = ({
    row,
    column,
    state,
    size
//hola
}) => {
    const place = document.createElement('button');
    const coin = document.createElement('div');
    place.style.height = '60px';
    place.style.width = '60px';
    coin.style.height = '50px'
    coin.style.height = '50px'
    coin.style.backgroundColor = state === 1 ? 'White': state === -1 ? 'Black': undefined;
    return place;
}
