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
}
