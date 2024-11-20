class Car{
    constructor(color,speed){
        this.color=color;
        this.speed=speed;
    }
    turboOn(){
        console.log('turbo is on!');
        
    }
}
const car1=new Car("red",60)
car1.turboOn()