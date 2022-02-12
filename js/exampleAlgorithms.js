export default class CR_Algorithms{
    algo0(cr) {
        var grid = 10;
        for(var x = 0; x <= cr.canvas.width/grid; x++){
            for(var y = 0; y <= cr.canvas.height/grid; y++){                
                var a = 64+Math.random()*128;

                cr.context.fillStyle = `rgb(${a},${a},${a},1)`;
                cr.context.fillRect(x*grid, y*grid, grid, grid);
            }
        }
    }

    algo1(cr) {
        var grid = 10;
    
        var wp = Math.ceil(cr.canvas.width/grid);
        var hp = Math.ceil(cr.canvas.height/grid);
    
        var cwp = (255/wp);
        var chp = (255/hp);
        
        cr.context.lineWidth = 1;
    
        for(var x = 0; x <= wp; x++){
            for(var y = 0; y <= hp; y++){
                cr.context.beginPath();
                
                cr.context.strokeStyle = `rgb(${x*cwp},${y*chp},${255-x*cwp},1)`;
                
                var vecx = cr.mouseX-x*grid;
                var vecy = cr.mouseY-y*grid;
    
                var norm = Math.sqrt(Math.pow(vecx,2)+Math.pow(vecy,2));
                
                var sx = x*grid;
                var sy = y*grid;
    
                cr.context.moveTo(sx, sy);
                cr.context.lineTo(sx + vecx/norm * grid/2, sy + vecy/norm * grid/2);
    
                cr.context.stroke();
                cr.context.closePath();
            }
        }         
    }

    algo2(cr) {
        var grid = 10;
    
        var wp = Math.ceil(cr.canvas.width/grid);
        var hp = Math.ceil(cr.canvas.height/grid);
    
        var cwp = (255/wp);
        var chp = (255/hp);
        
        cr.context.lineWidth = 1;
    
        for(var x = 0; x <= wp; x++){
            for(var y = 0; y <= hp; y++){
                cr.context.beginPath();
                
                cr.context.strokeStyle = `rgb(${x*cwp},${y*chp},${255-x*cwp},1)`;
                
                var vecx = cr.mouseX-x*grid;
                var vecy = cr.mouseY-y*grid;
    
                var norm = Math.sqrt(Math.pow(vecx,2)+Math.pow(vecy,2));
                
                var sx = x*grid;
                var sy = y*grid;
    
                cr.context.moveTo(sx, sy);
                cr.context.lineTo(sx + vecx/norm * grid*320, sy + vecy/norm * grid*320);
    
                cr.context.stroke();
                cr.context.closePath();
            }
        }         
    }

}