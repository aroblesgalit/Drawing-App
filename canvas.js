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

    function resizeCanvas() {
        canvas.height = canvas.parentElement.clientHeight;
        canvas.width = canvas.parentElement.clientWidth;
    }
    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = "blue";

        ctx.lineTo(e.clientX, e.clientY - 40);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY - 40);
    }

    // EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);


});