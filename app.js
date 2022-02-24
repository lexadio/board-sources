const board = document.querySelector('#board');
const colors = ['#FF7600', '#FF9840', '#FFAB00', '#FFC040', '#123EAB', '#466FD5', '#01939A', '#34C6CD']
const SQUARES_NUMBER = 750;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () =>  { // При наведении мышкой добавляем цвет
        setColor(square);
    })

    square.addEventListener('mouseleave', () =>  { // когда мышка убирается удаляем цвет
        removeColor(square);
    })

    board.append(square);
};

function setColor(element) {
    let color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    let index = Math.floor((Math.random() * colors.length));
    return colors[index];
}
