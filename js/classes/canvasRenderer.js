export default class CanvasRenderer {
    canvas;
    context;

    mouseX = 0;
    mouseY = 0;

    constructor(canvasElement){
        this.canvas = canvasElement;
        this.context = this.canvas.getContext('2d');

        this.canvas.onmousemove = event => {
            this.mouseX = event.offsetX;
            this.mouseY = event.offsetY;
        }

        this.canvas.ontouchmove = event => {
            this.mouseX = event.changedTouches[0].pageX;
            this.mouseY = event.changedTouches[0].pageY;
        }

        this.#renderLoop();
    }

    #renderLoop(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.algorithm();
        requestAnimationFrame(this.#renderLoop.bind(this));
    }

    algorithm(){}

    updateScreen(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}
