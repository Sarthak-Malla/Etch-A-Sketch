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
    
    const pixels = document.querySelectorAll('.drawing-pixel');
    
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = "black";
        });
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
});

changeSize(16);
