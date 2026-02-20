class inventory{
  constructor(invSlots){
    this.slotCount = invSlots
    // this.slot = loadImage("luckmeister/assets/invSlot.png")
    this.slots = []
    for(var i = 0; i<this.slotCount; i++){
      // image(this.slot,i*width/this.slotCount,0,width/this.slotCount,width/this.slotCount)
      this.slots.push(new )
    }
  }
}
class inventorySlot{
  constructor(id){
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
    item.x = this.x
    item.y = this.y
  }
}
