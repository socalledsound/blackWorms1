var inc1 = 0.0001;
var inc2 = 0.0001;
var innerCols =  [];
var outerCols = [];
var numInner = 20;
var numOuter = 10;
var innerOpacity = 200;
var outerOpacity = 100;
innerSize = 200;
outerSize = 300;

function setup(){
    frameRate(10);
  createCanvas(1000, 1000);
  background(0);
  rectMode(CENTER);
  for(var i = 0; i < numOuter; i++){
      outerCols[i]= [random(255),random(255),random(255),outerOpacity];      
  }  
  for(var i = 0; i < numInner; i++){
      innerCols[i]= [random(255),random(255),random(255),innerOpacity];      
  }      
    
    
    
}

function draw(){
//	background(240);
  background(0);
	translate(width/2, height/2);
	for (var i = 0; i < numOuter; i++) {
        rotate(inc2);
		push();
		rotate(TWO_PI * i / 8);
		var tx = outerSize * 1.1 * noise(0.01*frameCount);
		translate(tx, 0);
		fill(outerCols[i]);
        ellipse(0, 0, outerSize);
        //inc2+=0.005;
		inc2+=sin(0.001)
        for (var j = 0; j < numInner; j++) {
            rotate(inc1);
			push();
			rotate(TWO_PI * j / numInner/1.3);
			var rx = 180 * noise(0.01*frameCount + 10);
            //fill(innerCols[j]);
            fill(random(0,30));
            strokeWeight(random(3));
            blink = random(10);
            if (blink > 1) {
                stroke(random(255));
            }
            else {
                stroke(0);
            }
            
            
			ellipse(rx, 0, innerSize/4);
			pop();
            inc1+=0.0001;
		}		
		translate()
		pop();
        
	}
}