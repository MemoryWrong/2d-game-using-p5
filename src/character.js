class Character{
    constructor(x,y){
        this.pos = createVector(width/2, height/2);
        this.lifespan = 200;
        this.health = 100;
        
        this.clickArea = {
            w:20,
            h:20
        }
    }

    move(x,y){
        // console.log(x,y)
        if(this.pos.x + x<= width && this.pos.x+x>=0){
            this.pos.x +=x;

        }
        if(this.pos.y+ y<= height &&this.pos.y+y>=0){
            this.pos.y +=y;
        }

    }

    draw(){
        fill(0,255,0);
        fill(200);
        ellipse(this.pos.x, this.pos.y, 20,20);
    }

    attack(){
        ellipse(this.pos.x, this.pos.y, 10, 10);
    }


    inArea(m_x, m_y){
        if(m_x> this.pos.x - 10 && m_x < this.pos.x+10 
        && m_y > this.pos.y -10 && m_y < this.pos.y +10){
            // is in the click area
            return true;
        }
        return false;
    }


}