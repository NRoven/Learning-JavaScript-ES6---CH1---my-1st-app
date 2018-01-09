$(document).ready(function() { 
    'use strict'; 
    console.log('main.js loaded');
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    //***********************************
    // one circle in canvas
    //***********************************
    /*
    var c = Shape.Circle(200, 200, 50); 
    c.fillColor = 'red';
    */

    //***********************************    
    //Automating Repetitive Tasks (array of 64 green circles in canvas)
    //***********************************
    /*
    var c;
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) { 
            c = Shape.Circle(x, y, 20); 
            c.fillColor = 'green';
        } 
    }
    */

    //***********************************    
    //Handling User Input
    //***********************************
    
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    var tool = new Tool();

    tool.onMouseDown = function(event) {
        //x,y are separated coordinates
        //var c = Shape.Circle(event.point.x, event.point.y, getRndInteger(20, 50));

        //other option is the point directly in the circle (instead of passing the x and y coordinates separately):
        var c = Shape.Circle(event.point, getRndInteger(20, 50));    
        c.fillColor = 'red';
    };
    

    //***********************************
    //Hello, World
    //***********************************

    /*
    var c = Shape.Circle(200, 200, 80); 
    c.fillColor = 'black';
    var text = new PointText(200, 200); 
    text.justification = 'center'; 
    text.fillColor = 'white'; 
    text.fontSize = 20;
    text.content = 'hello world';

    var tool = new Tool();
    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'red';
    };
    */

    paper.view.draw();
});
