class inventory{
  constructor(invSlots){
    this.slotCount = invSlots
    this.slot = loadImage("luckmeister/assets/invSlot.png")
    for(var i = 0; i<invSlots; i++){
      image(slot,i*width/invSlots,0,width/invSlots,width/invSlots)
    }
  }
}
