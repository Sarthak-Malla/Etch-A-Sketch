const drawingPad = document.querySelector(".drawing-pad");
const resizeBtn = document.querySelector(".grid-size-button");
const padSize  = drawingPad.clientHeight;

function changeSize(size) {
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement('div');
        div.classList.add("drawing-pixel");
        div.setAttribute('style', `height: ${padSize/size}px; width: ${padSize/size}px; margin: 0; border: 0;`)
    
        drawingPad.appendChild(div);
    }
}

function draw() {
    const pixels = document.querySelectorAll('.drawing-pixel');

    let down;
    let isDown = () => {
        down = true;
    };
    let notDown = () => {
        down = false;
    };
    
    pixels.forEach((pixel) => {
        pixel.addEventListener('mousedown', isDown);
        pixel.addEventListener('mouseover', () => {
            if (down === true) {
                pixel.style.backgroundColor = "black";
            }
        });
        pixel.addEventListener('mouseup', notDown);
    });
}

resizeBtn.addEventListener('click', () => {
    let size = prompt("Enter the Number of Squares per side [16-100]:");
    while (size < 16 || size > 100) {
        size = prompt("Enter the Number of Squares per side [16-100]:");
    }

    const pixels = document.querySelectorAll('.drawing-pixel');
    pixels.forEach((pixel) => {
        drawingPad.removeChild(pixel);
    });

    changeSize(size);
    draw();
});

changeSize(16);
draw();
