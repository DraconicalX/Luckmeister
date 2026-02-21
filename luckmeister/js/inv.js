class inventory{
  constructor(invSlots){
    this.slotCount = invSlots
    // this.slot = loadImage("luckmeister/assets/invSlot.png")
    this.slots = []
    for(var i = 0; i<this.slotCount; i++){
      // image(this.slot,i*width/this.slotCount,0,width/this.slotCount,width/this.slotCount)
      this.slots.push(new inventorySlot(i))
    }
  }
}
class inventorySlot{
  constructor(id){
    this.icon = loadImage("luckmeister/assets/invSlot.png")
    this.slotNum = id;
    this.item = null;
    this.x = id*width/this.slotCount
    this.y = 0
  }
  getXY(){
    this.x = i*width/this.slotCount
    this.y = 0
  }
  addItem(item){
    this.item = item
  }
  display(){
    image(this.icon,this.x,this.y,width/16,height/16)
    image(this.item.icon,this.x-(this.item.width-width/16),this.y-(this.item.height-width/16))
  }
}
