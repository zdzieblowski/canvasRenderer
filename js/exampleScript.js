import CanvasRenderer from './classes/canvasRenderer.js';
import CR_Algorithms from './exampleAlgorithms.js';

var cr = new CanvasRenderer(document.getElementById('HTML_CANVAS_ELEMENT'));
var crAlgo = new CR_Algorithms();

cr.algorithm = function() {
    crAlgo.algo1(cr);
};

window.onresize = event => {
    cr.updateScreen(event);
}

window.dispatchEvent(new Event('resize'));