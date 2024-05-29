const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++){
        const square = document.createElement('div');
        square.style.width = '32px';
        square.style.height = '32px';
        square.style.border = '1px solid black';
        square.style.boxSizing = 'border-box'
        square.style.margin = '0px'
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
            console.log('touch')
        })
        container.appendChild(square);
    }
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    const size = prompt('how griddy u want it?');
    const squares = document.querySelectorAll('div.container > div');
    squares.forEach(e => e.remove());
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++){
            const square = document.createElement('div');
            square.style.width = `${512 / size}px`;
            square.style.height = `${512 / size}px`;
            square.style.border = '1px solid black';
            square.style.boxSizing = 'border-box'
            square.style.margin = '0px'
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black';
                console.log('touch')
            })
            container.appendChild(square);
        }
    }
})

const squares = document.querySelectorAll('div.container > div');
const erase = document.querySelector('.erase')

erase.addEventListener('click', () => {
    console.log('erase')
    squares.forEach(e => {
        e.removeEventListener('mouseover', () => {
            e.style.backgroundColor = 'black';
            console.log('touch')
        })

        e.addEventListener('mouseover', () => {
            e.style.backgroundColor = '';
            console.log('touch')
        })
    })
})

const draw = document.addEventListener('click', () => {
    squares.forEach(e => {
        e.addEventListener('mouseover', () => {
            e.style.backgroundColor = 'black';
            console.log('touch')
        })
    })
})

