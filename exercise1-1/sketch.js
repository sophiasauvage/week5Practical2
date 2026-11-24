let randomColor
let xCoordinate =[]
let yCoordinate = []
let rectDimention = []
function setup(){
    createCanvas(600, 600)

}
function rectangleRandom(){
    xCoordinate.push(random(0, 600))
    yCoordinate.push(random(0, 600))
    rectDimention.push(random())
}
function draw(){
    background(randomColour())

}

function randomColour(){
return color(random(255), random(255), random(255))
} 