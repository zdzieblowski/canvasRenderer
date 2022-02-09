import CanvasRenderer from './classes/canvasRenderer.js';
import CR_Algorithms from './exampleAlgorithms.js';

var crAlgo = new CR_Algorithms();

//

var cr1 = new CanvasRenderer(
    document.getElementById('HTML_CANVAS_ELEMENT1'),
    20,                 // FPS
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
