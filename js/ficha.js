class ficha{
    
    constructor(posx,posy,fill,context,radio){
        this.posx=posx;
        this.posy=posy;
        this.fill=fill;
        this.context=context
        this.radio=radio;
        
    }

    setPosition(x,y){
        this.posx=x;
        this.posy=y;
    }

    getPositionX(){
        return this.posx;
    }

    getPositionY(){
        return this.posy;
    }

    draw(){
        this.context.fillStyle.fill;
    }

    //Calcula la distancia desde donde esta el cursor (x,y) hasta el centro de la ficha (posx,posy)
    //Si la distancia es menor al radio, entonces el cursor esta dentro de la ficha
    isPointInside(x,y){
        let _x= this.posx - x;
        let _y=this.posy - y;
        return Math.sqrt(_x*_x + _y*_y) < this.radio;
    }
}