const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++){
        const square = document.createElement('div');
        square.style.width = '32px';
        square.style.height = '32px';
        square.style.border = '1px solid black';
        square.style.boxSizing = 'border-box'
        square.style.margin = '0px'
        container.appendChild(square);
    }
}

for (let i = 0; i < 5; i++) {
    console.log('wtf');
}