let randomColor
//let xCoordinate =[]
//let yCoordinate = []
//let rectDimention = []
let rectAmount
let randomRect = []
function setup(){
    createCanvas(600, 600)
     background(randomColour())

}
function rectangleRandom(){
    let coordX = {
        x: random(0, 600),
        y: random(0, 600),
        d: random(1, 30)
    }
    randomRect.push(coordX)

//xCoordinate.push(random(0, 600))
    //yCoordinate.push(random(0, 600))
   // rectDimention.push(random())


}
function draw(){

    rectangleRandom()
 
   for ( let i = 0; i < randomRect.length; i++){
       console.log(randomRect[i].x)
        rect(randomRect[i].x, randomRect[i].y, randomRect[i].d, randomRect[i].d)
}

}

function randomColour(){
return color(random(255), random(255), random(255))
} 