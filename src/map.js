class Map{
    constructor(){
        this.tiles = [];
        this.wallSize = 50;
        this.init();
    }

    init(){
        for(let i = 0; i<this.wallSize; i++){
            let x = random(0, width);
            let y = random(0, height);
            let w = random(10,100);
            let h = random(10,100);
            this.tiles.push(new Tile(x, y, w, h));
            
        }
    }

    draw(){
        for(let i = 0; i<this.tiles.length; i++){
            this.tiles[i].draw();
        }
    }
    
}

class Tile{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.clickArea = {
            w:this.w,
            h:this.h
        }
    }
    draw(){
        // this is brick color
        fill(135,41,21);
        rect(this.x, this.y, this.w, this.h);
    }

    inArea(m_x, m_y){
        if(m_x> this.x  && m_x < this.x+this.w 
        && m_y > this.y  && m_y < this.y +this.h){
            // is in the click area
            return true;
        }
        return false;
    }
    
}