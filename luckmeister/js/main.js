function preload(){
  enUsJSON = loadJSON("luckmeister/data/en-us.json")
  tester = loadImage("luckmeister/js/item/Item.png")
  icon = loadImage("fvc-192.png")
}
function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  
  cnv.parent(document.querySelector('main'));
  let test = new Item();
}
function draw(){
  fill(255, 0, 0)
  image(test.icon,0,0,100,100)
  image(tester,0,0,100,100)
  image(icon,0,0,100,100)
}
