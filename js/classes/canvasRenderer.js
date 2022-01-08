export default class CanvasRenderer {
    canvas;
    context;

    debug;

    mouseX = 0;
    mouseY = 0;

    fps;
    time = performance.now();

    constructor(canvasElement, requestedFPS, debug = false){
        if(requestedFPS>0){
            this.frameTime = 1000/requestedFPS;
        } else {
            this.frameTime = 1;
        }

        this.debug = debug;

        this.canvas = canvasElement;
        this.context = this.canvas.getContext('2d');

        this.canvas.onmousemove = event => {
            this.mouseX = event.pageX;
            this.mouseY = event.pageY;
        }

        this.canvas.ontouchmove = event => {
            this.mouseX = event.changedTouches[0].pageX;
            this.mouseY = event.changedTouches[0].pageY;
        }

        this.#renderLoop();
    }

    #dlog(input) {
        if(this.debug){
            console.log(input);
        }
    }

    #renderLoop(){
        if(performance.now() - this.time >= this.frameTime){
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.algorithm();

            this.time = performance.now();
            this.#dlog('redraw');
        }

        requestAnimationFrame(this.#renderLoop.bind(this));
    }

    algorithm(){}

    updateScreen(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}
