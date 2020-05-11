window.addEventListener("load", () => {
    // Target the canvas element
    const canvas = document.querySelector("#canvas");
    // Define which context/environment to work in
    const ctx = canvas.getContext("2d");

    // Resize canvas
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Variables
    let painting = false;
    let strokeColor;
    let strokeSize = 5;

    function resizeCanvas() {
        canvas.height = canvas.parentElement.clientHeight;
        canvas.width = canvas.parentElement.clientWidth;
    }
    function startPosition(e) {
        colorPalette.style.display = "none";
        brushSizeContainer.style.display = "none";
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = strokeSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = strokeColor;

        ctx.lineTo(e.clientX, e.clientY - 40);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY - 40);
    }

    // EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);


    // Variables
    const paletteIcon = document.querySelector("#palette-icon");
    const colorPalette = document.querySelector("#color-palette");
    const brushSizeIcon = document.querySelector("#brush-size-icon");
    const brushSizeContainer = document.querySelector("#brush-size");
    const brushSizeSlider = document.querySelector(".brush-size-slider");
    
    // Initial settings
    colorPalette.style.display = "none";
    brushSizeContainer.style.display = "none";

    function togglePalette() {
        brushSizeContainer.style.display = "none";
        if (colorPalette.style.display === "none") {
            colorPalette.style.display = "flex";
        } else {
            colorPalette.style.display = "none";
        }
    }
    function setColor(e) {
        strokeColor = e.target.style.backgroundColor;  
        paletteIcon.style.color = strokeColor;  
        togglePalette();
    }
    function toggleBrushSize() {
        colorPalette.style.display = "none";
        if (brushSizeContainer.style.display === "none") {
            brushSizeContainer.style.display = "block";
        } else {
            brushSizeContainer.style.display = "none";
        }
    }
    function setBrushSize() {
        strokeSize = brushSizeSlider.value;
        brushSizeIcon.style.fontSize = (strokeSize * 2) + "px";
    }

    // Settings
    paletteIcon.addEventListener("click", togglePalette);
    colorPalette.addEventListener("click", setColor);
    brushSizeIcon.addEventListener("click", toggleBrushSize);
    brushSizeContainer.addEventListener("change", setBrushSize);
});