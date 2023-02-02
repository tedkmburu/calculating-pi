let totalDots = 0
let dotsInCircle = 0

const size = 1000;
const diameter = size;
const radius = diameter / 2 

const dotsAtATime = 10000; 

function setup() 
{
    createCanvas(size, size + 100)
    background(0)
    stroke(255)
    line(0, size, size, size)
}

function draw() 
{
    for (let i = 0; i < dotsAtATime; i++) 
    {
        let x = round(Math.random() * size)
        let y = round(Math.random() * size)

        noStroke()
        fill(255)
        rect(x, y, 1, 1)

        totalDots++

        if (p5.Vector.dist(createVector(x, y), createVector(radius, radius)) <= radius)
        {
            dotsInCircle++
        }
    }

    // A = pi * r^2
    // pi = A / (r^2)

    fill(0)
    rect(0, diameter, diameter, 100)

    let ratio = dotsInCircle/totalDots;
    noStroke()
    fill(255)
    textSize(20)
    text("ratio: " + ratio, 0, diameter + 20)

    let AreaOfCircle = ratio * size * size;
    let piValue = AreaOfCircle / (radius * radius)
    text("pi: " + piValue, 0, diameter + 50)

    let percent = (PI / piValue) * 100
    text("difference: " + percent + "%", 0, diameter + 70)


    stroke("red")
    noFill()
    ellipse(radius, radius, diameter, diameter)


    

}
