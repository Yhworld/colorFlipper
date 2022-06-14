const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', '#ccc', 'pink', '#cccc'];

const buttons = document.querySelector('button');
const colorText = document.querySelector('span');


buttons.addEventListener('click', () => {
    const value = returnValue();
    document.body.style.backgroundColor = colors[value];
    colorText.textContent = colors[value]
})

function returnValue() {
    return Math.floor(Math.random() * colors.length)
}