list = [];
working = false;

function preload() {
    
}


function setup() {
    createCanvas(800, 400);
    background("grey");
    button = createButton('Send it');
    button.position(20, 20);
    button.mousePressed(listprint);
    namespace = createInput();
    namespace.position(20, 65);
    button = createButton('Send it');
    button.position(20, 90);
    button.mousePressed(addname);

    
}

function draw() {
}



function addname(){
    append(list, namespace.value());
    namespace.value() = "";
}


function listprint(){
    const tempname = list[0];
    text(tempname, 20, 160);

}