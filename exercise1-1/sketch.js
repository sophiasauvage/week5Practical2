let randomColor
let randomRect = []
function setup(){
    createCanvas(600, 600)
     background(randomColour())
        
    for (let amount = 1; amount <= 100; amount += 1){
   rectangleRandom()
    }

}
function rectangleRandom(){
    let coordX =  {
        x: random(0, 600),
        y: random(0, 600),
        d: random(1, 30)
    }
    randomRect.push(coordX)

}
function draw(){
    background(255, 255, 0)
   for ( let i = 0; i < randomRect.length; i++){
       if ([i] % 2 === 0)
        fill(0)
    else 
    fill(255)
        rect(randomRect[i].x, randomRect[i].y, randomRect[i].d, randomRect[i].d)
}
if (keyIsPressed === true){
    console.log("anything")
    randomRect = []
     for (let amount = 1; amount <= 100; amount += 1){
   rectangleRandom()
     }
}     

}

function randomColour(){
return color(random(255), random(255), random(255))
} 
