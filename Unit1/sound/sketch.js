let s1;

function preload() 
{
 s1 = loadSound("assets/playinggod.mp3")   
}


function setup() 
{
    createCanvas(500, 500);
    textAlign(CENTER);
    s1.play();

}

function draw() 
{
    background("grey");
    fill("white")
    text("Playing God by Polyphia /,this song i think is very unique and progressive and was already on my computer. ",100,100,400,400)
}

function mouseReleased()
{
    if (s1.isPlaying())
    {
        s1.pause();
    } else
    {
        s1.play();
    }

}


function touchStarted() 
{
    getAudioContext().resume();
}