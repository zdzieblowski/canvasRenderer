export default class CanvasRenderer {
    canvas;
    context;

    debug;

    mouseX = 0;
    mouseY = 0;

    time = performance.now();

    alpha;
    looping;

    constructor(canvasElement, requestedFPS = 60, i_debug = false, i_alpha = false, i_antialias = false, i_looping = true){
        if(requestedFPS > 0){
            this.frameTime = 1000 / requestedFPS;
        } else {
            this.frameTime = 1;
        }

        this.alpha = i_alpha;
        this.looping = i_looping;

        this.debug = i_debug;

        this.canvas = canvasElement;
        this.context = this.canvas.getContext('2d', {
            antialias: i_antialias,
            alpha: i_alpha
        });

        this.canvas.onmousemove = event => {
            this.#dlog(`mouse x: ${event.pageX} mouse y: ${event.pageY}`);
            this.mouseX = event.pageX;
            this.mouseY = event.pageY;
        }

        this.canvas.ontouchmove = event => {
            this.#dlog(`touch x: ${event.changedTouches[0].pageX} touch y: ${event.changedTouches[0].pageY}`);
            this.mouseX = event.changedTouches[0].pageX;
            this.mouseY = event.changedTouches[0].pageY;
        }

        setTimeout(() => { this.#renderLoop(); }, 100);
        this.#dlog(this);
    }

    #dlog(input) {
        if(this.debug){
            console.log(input);
        }
    }

    #renderLoop(){
        if(performance.now() - this.time >= this.frameTime){
            if(this.alpha){
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }else{
            this.context.fillStyle = 'rgba(0,0,0,1)';
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
            this.#dlog(`canvas redraw`);
            this.algorithm();

            this.time = performance.now();
            
        }
        if(this.looping){
            requestAnimationFrame(this.#renderLoop.bind(this));
        }
    }

    algorithm(){}

    updateScreen(){
        this.#dlog(`canvas resize: ${window.innerWidth} / ${window.innerHeight} px`);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}
