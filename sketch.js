const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber, rock, iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    hammer = new Hammer(10,100);
    rubber = new Rubber(800, 50, 50, 50);
    rock = new Rock(600, 50, 100, 100);
    iron = new Iron(400, 50, 100, 50);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();

    hammer.display();

    rubber.display();
    rock.display();
    iron.display();
}