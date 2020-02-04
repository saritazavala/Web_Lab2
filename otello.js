/*
Universidad del Valle de Guatemala
Sara Nohemi Zavala Gutierrez
18893 -- Laboratorio 2
Febrero 05 de 2020
* */

const root = document.getElementById('root');

const renderCoin = ({
    column = 0,
    row = 0,
    state = 0
}) => {
    const coin__div = document.createElement('div');
    coin__div.style.width = `${size}px`;
    coin__div.style.height = `${size}px`;
    coin__div.style.borderRadius = `${size / 2}px`;
    coin__div.style.backgroundColor = color;
    return coin__div;
}m

