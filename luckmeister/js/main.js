function preload(){
  enUsJSON = loadJSON("luckmeister/data/en-us.json")
  tester = loadImage("luckmeister/js/item/Item.png")
  icon = loadImage("fvc-192.png")
}
function setup(){
  console.log("Setup has started!");
  let cnv = createCanvas(windowWidth, windowHeight);
  
  cnv.parent(document.querySelector('main'));
  test = new EldritchAbomination();
  testInvItem = test.castToInv();
  inv = new inventorySlot(1);
  inv.addItem(testInvItem);
  console.log("Setup has ended!");
}
function draw(){
  background(100);
  fill(0,255,0)
  // image(test.icon,0,0,100,100)
  console.log(testInvItem.x)
  inv.display()
  // inv = new inventory(12);
}
