class Item{
  constructor(){
    this.tooltip = enUsJSON[this.constructor.name].tooltip
    this.max = 9999;
    this.height = 32;
    this.width = 32;
    this.invWidth = 24;
    this.invHeight = 24;
    this.voidTime = null;
    this.armor = false;
    this.weapon = false;
    this.quest = false;
    this.icon = loadImage("luckmeister/js/item/"+this.constructor.name+".png")
  }
  stats(){
    // override
  }
  castToInv(){
    return new InvItem(this.width,this.height,this.icon,this.tooltip,this.constructor.name,this.max)
  }
}
class InvItem{
  constructor(width,height,icon,tooltip,name,max){
    this.width=width
    this.height=height
    this.icon=icon
    this.tooltip=tooltip
    this.name=name;
    this.max = max;
    this.x = null;
    this.y = null;
  }
  addToSlot(slot){
    this.x = slot.x
    this.y = slot.y
  }
  displayItem(){
    image(this.icon,this.x,this.y,this.width,this.height)
  }
}
class EldritchAbomination extends Item{
  stats(){
    this.max = 1
    this.height = 64
    this.width = 64
    this.voidTime = 20
    this.weapon = true;
  }
}
