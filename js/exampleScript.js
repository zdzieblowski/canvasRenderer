import CanvasRenderer from './classes/canvasRenderer.js';
import CR_Algorithms from './exampleAlgorithms.js';

var crAlgo = new CR_Algorithms();

//

var cr0 = new CanvasRenderer(document.getElementById('HTML_CANVAS_ELEMENT0'), 0, false, false, false, false, window.innerWidth,200);

cr0.algorithm = function() {
    for(var iks=0;iks<window.innerHeight*10;iks+=0.1){
        cr0.setPixel(iks,(Math.sin(iks)*iks/5)+this.canvas.height/2,255,0,0,1);
    }
}

//

var cr1 = new CanvasRenderer(
    document.getElementById('HTML_CANVAS_ELEMENT1'),
    60,                 // FPS
    false,              // DEBUG
    false,              // ALPHA
    false,              // ANTIALIAS
    true,               // LOOPING
    window.innerWidth,  // RENDERER WIDTH
    200                 // RENDERER HEIGHT
);

cr1.algorithm = function() {
    crAlgo.algo0(cr1);
};

//

var cr2 = new CanvasRenderer(
    document.getElementById('HTML_CANVAS_ELEMENT2'),
    40,                 // FPS
    false,              // DEBUG
    false,              // ALPHA
    false,              // ANTIALIAS
    true,               // LOOPING
    window.innerWidth,  // RENDERER WIDTH
    200                 // RENDERER HEIGHT
);

cr2.algorithm = function() {
    crAlgo.algo1(cr2);
};

//

var cr3 = new CanvasRenderer(
    document.getElementById('HTML_CANVAS_ELEMENT3'),
    60,                 // FPS
    false,              // DEBUG
    false,              // ALPHA
    false,              // ANTIALIAS
    true,               // LOOPING
    window.innerWidth,  // RENDERER WIDTH
    200                 // RENDERER HEIGHT
);

cr3.algorithm = function() {
    crAlgo.algo2(cr3);
};

//

window.onresize = event => {
    cr1.updateRendererSize(window.innerWidth,200);
    cr2.updateRendererSize(window.innerWidth,200);
    cr3.updateRendererSize(window.innerWidth,200);
}
