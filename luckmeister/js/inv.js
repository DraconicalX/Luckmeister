class inventory{
  constructor(invSlots){
    this.slotCount = invSlots
    this.slot = loadImage("luckmeister/assets/invSlot.png")
    for(var i = 0; i<this.slotCount; i++){
      image(this.slot,i*width/this.slotCount,0,width/this.slotCount,width/this.slotCount)
    }
  }
}
