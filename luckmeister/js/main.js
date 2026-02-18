function preload(){
  enUsJSON = loadJSON("luckmeister/data/en-us.json")
}
function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  
  cnv.parent(document.querySelector('main'));
  let test = new Item();
}
function draw(){
  fill(255, 0, 0)
  rect(0,0,400,400)
  image(test.icon,0,0,100,100)
  
}
