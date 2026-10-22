let gridSize = 50
let cols
let rows
function setup() {
createCanvas(windowWidth, windowHeight);
//   background(220);
cols = int(width/gridSize)
rows = int(height/gridSize)
// noLoop()
}


// function draw() {
//   background(102);

//   push();
//   translate(width * 0.2, height * 0.5);
//   rotate(frameCount / 200.0);
//   star(0, 0, 5, 70, 3);
//   pop();

//   push();
//   translate(width * 0.5, height * 0.5);
//   rotate(frameCount / 50.0);
//   star(0, 0, 80, 100, 40);
//   pop();

//   push();
//   translate(width * 0.8, height * 0.5);
//   rotate(frameCount / -100.0);
//   star(0, 0, 30, 70, 5);
//   pop();
// }

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function draw() {
    // background("navy");
    // stroke(random(255), random(255), random(255)) 
    // strokeWeight(2) 
    // noFill()  
    // for (let i = 0; i < width; i+=50)(
    //     circle(i + 25, 25, 50)
    // )
    
    // stroke(255)
    // strokeWeight(5)
    // strokeCap(PROJECT)

    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            let x = i * gridSize + gridSize/2
            let y = j * gridSize + gridSize/2
            
            if (random() > 0.5) {
            // line(x-gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2)
            stroke("orange")
            noFill()
            square(x-gridSize/2, y-gridSize/2, gridSize * 0.5)
             } else {
            // line(x-gridSize/2, y+gridSize/2, x+gridSize/2, y-gridSize/2)
            fill("magenta")
            square(x, y, gridSize * 0.5)
            }

            push();
            translate(width * 0.2, height * 0.5);
            rotate(frameCount / 200.0);
            stroke("black")
            strokeWeight(random(255))
            star(0, 0, 30, 70, 5);
            pop();

            push();
            translate(width * 0.5, height * 0.5);
            rotate(frameCount / 50.0);
            stroke("black")
            strokeWeight(random(255))
            star(0, 0, 30, 70, 5);
            pop();

            push();
            translate(width * 0.8, height * 0.5);
            rotate(frameCount / -100.0);
            stroke("black")
            strokeWeight(random(255))
            star(0, 0, 30, 70, 5);
            pop();

            // let d = dist(x, y, mouseX, mouseY)
            // let circleSize = map(d, 50, 900, gridSize, gridSize * 4)
            // // let circleSize = map(d, 50, 900, gridSize, gridSize * 0.25)
            // // let circleSize = map(d, 0, 800, gridSize, gridSize * 5.5)
            // // let circleSize = map(d, 0, 800, gridSize, gridSize * 0.1)
            // let r = map(x, 0, width, 20, 250)
            // let b = map(y, 0, height, 0, 250)
            // fill(r, b, r)
            // // fill(r, 90, 86)
            // // fill(r, 150, b) 
            // circle(x, y, circleSize)

            // star(x, y, gridSize*0.3, gridSize*0.5, 5) // don't do this, use push(), pop(), and translate()
            // noStroke()
            // push()
            // translate(x, y)
            // let upValue = map(sin(frameCount*0.1+i+j), -1, 1, -10, 10)
            // translate(0,upValue) // wave~
            // // star face
            // push()
            // rotate((frameCount*0.01+i+j))
            // fill("#F3DFA2")
            // star(0,0,gridSize*0.5, gridSize*0.4, 5) 
            // pop()


            
    //   if (random() > 0.5) {
    //     // line(x-gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2)
    //     stroke("lime")
    //     fill("blue")
    //     circle(x, y, gridSize)
    //   } else {
    //     // line(x-gridSize/2, y+gridSize/2, x+gridSize/2, y-gridSize/2)
    //     noFill()
    //     circle(x, y, gridSize)
    //   }

    //   if (random() > 3) {
    //     // line(x-gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2)
    //     stroke("magenta")
    //     fill("black")
    //     circle(x, y, gridSize)
    //   } else {
    //     // line(x-gridSize/2, y+gridSize/2, x+gridSize/2, y-gridSize/2)
    //     noFill()
    //     square(x, y, gridSize * 3)
    //   }   

    } 
}
}



        // let d = dist(x, y, mouseX, mouseY)
        // let circleSize = map(d, 50, 900, gridSize, gridSize * 0.25)
        // // let circleSize = map(d, 0, 800, gridSize, gridSize * 5.5)
        // // let circleSize = map(d, 0, 800, gridSize, gridSize * 0.1)
        // let r = map(x, 0, width, 20, 250)
        // let b = map(y, 0, height, 0, 250)
        // fill(r, 90, 86)
        // // fill(r, 150, b) 
        // circle(x, y, circleSize)

//         // rectMode(CENTER)
//         // // rect(random(0, width), random(0, height), random(30))
//         // rect(x, y, gridSize, gridSize)
//         // triangle(x-gridSize/2, y-gridSize/2, x+gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2)
//     }
//     }
//     // for (let i = 0; i < cols; i++)(
//     //     circle(i*gridSize, gridSize/2, 25, gridSize*4)
//     // )
//     // circle(25, 25, 50)
//     // circle(75, 25, 50)
//     // circle(125, 25, 50)
//     // circle(175, 25, 50)
//     // circle(225, 25, 50)

// }