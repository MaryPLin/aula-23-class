class Ground{

    construtor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    show(){
        var posicao = this.body.position;
        rectMode(CENTER);
        fill("purple");
        rect(posicao.x, posicao.y, this.width, this.height);
    }

}