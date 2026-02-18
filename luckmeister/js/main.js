function preload(){
  enUsJSON = loadJSON("luckmeister/data/en-us.json")
  tester = loadImage("luckmeister/js/item/Item.png")
  icon = loadImage("fvc-192.png")
}
function setup(){
  console.log("Setup has started!");
  let cnv = createCanvas(windowWidth, windowHeight);
  
  // cnv.parent(document.querySelector('main'));
  test = new Item();
}
function draw(){
  background(255, 0, 0);
  fill(0,255,0)
  rect(0,0,100,100)
  // image(test.icon,0,0,100,100)
  // image(tester,0,0,100,100)
  // image(icon,0,0,100,100)
}
