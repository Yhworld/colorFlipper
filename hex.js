const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D','E','F']

const buttons = document.querySelector('button');
const textColors = document.querySelector('span');

buttons.addEventListener('click', () => {
    let hexValue = '#';
    for (let i = 0; i < 6; i++) {
        hexValue += hexColor[returnValue()];
    }
    document.body.style.backgroundColor= hexValue;
    textColors.textContent = hexValue
})

function returnValue() {
    return Math.floor(Math.random() * hexColor.length)
}