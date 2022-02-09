export default class CanvasRenderer {
    canvas;
    context;

    debug;

    mouseX = 0;
    mouseY = 0;

    time = performance.now();

    alpha;
    looping;

    constructor(canvasElement, requestedFPS = 60, i_debug = false, i_alpha = false, i_antialias = false, i_looping = true, i_w = 0, i_h = 0){
        if(requestedFPS > 0){
            this.frameTime = 1000 / requestedFPS;
        } else {
            this.frameTime = 1;
        }

        this.alpha = i_alpha;
        this.looping = i_looping;

        this.targetWidth = i_w;
        this.targetHeight = i_h;

        this.debug = i_debug;

        this.canvas = canvasElement;
        this.updateRendererSize(i_w,i_h);

        this.context = this.canvas.getContext('2d', {
            antialias: i_antialias,
            alpha: i_alpha
        });

        this.canvas.onmousemove = event => {
            var rect = this.canvas.getBoundingClientRect();
            this.#dlog(`mouse x: ${event.clientX - rect.left} mouse y: ${event.clientY - rect.top}`);
            
            this.mouseX = event.clientX - rect.left;
            this.mouseY = event.clientY - rect.top;
        }

        this.canvas.ontouchmove = event => {
            var rect = this.canvas.getBoundingClientRect();
            this.#dlog(`touch x: ${event.changedTouches[0].clientX - rect.left} touch y: ${event.changedTouches[0].clientY - rect.top}`);
            
            this.mouseX = event.changedTouches[0].clientX - rect.left;
            this.mouseY = event.changedTouches[0].clientY - rect.top;
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

    updateRendererSize(w, h){
        this.canvas.width = w;
        this.canvas.height = h;
    }
}
