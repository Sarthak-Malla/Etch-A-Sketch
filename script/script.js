const drawingPad = document.querySelector(".drawing-pad");

for (let i = 0; i < 16*16; i++) {
    const div = document.createElement('div');
    div.classList.add("drawing-pixel");
    div.setAttribute('style', `height: 40px; width: 40px; background-color: ${color};`)

    drawingPad.appendChild(div);
}