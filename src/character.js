class Character{
    constructor(x,y){
        this.pos = createVector(width/2, height/2);
        this.vel = createVector();
        this.lifespan = 200;
        this.health = 100;
        
        this.clickArea = {
            w:20,
            h:20
        }
    }

    update(){
        this.pos.add(this.vel);
    }

    draw(){
        fill(0,255,255);
        ellipse(this.pos.x, this.pos.y, 20,20);
    }

    attack(){
        ellipse(this.pos.x, this.pos.y, 10, 10);
    }


    canClick(m_x, m_y){
        if(m_x> this.pos.x - 10 && m_x < this.pos.x+10 
        && m_y > this.pos.y -10 && m_y < this.pos.y +10){
            // is in the click area
            return true;
        }
        return false;
    }
}