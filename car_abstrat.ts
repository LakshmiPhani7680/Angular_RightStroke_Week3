abstract class car{
  private car_color;
  private Engine;
  private  Capacity;
  private Noofcylinders;
  constructor(car_color:String,Engine:String,Capacity:Number,Noofcylinders:number){
       this.car_color=car_color;
       this.Engine=Engine;
       this.Capacity=Capacity;
       this.Noofcylinders=Noofcylinders;
  }
  Accelarate=()=>{
      return `The car is accelerating through ${this.Engine}`;
  }
  OpenCarLock=()=>{
      return "The car door is opened";
  }
  CloseCarLock=()=>{
      return "The car door is closed";
  }
  abstract startcar(): string;

  abstract stopcar(): string;
}

class shv extends car {
  private carname:String;
  constructor(carname:String,car_color:String,Engine:String,Capacity:Number,Noofcylinders:number){
        super(car_color,Engine,Capacity,Noofcylinders);
        this.carname=carname;
  }
  startcar():string{
      return `The ${this.carname} is started`;
  }

  stopcar(): string{
      return `The ${this.carname} is stopped`;
  }

}
class sedan extends car{
  private carname:String;
  constructor(carname:String,car_color:String,Engine:String,Capacity:Number,Noofcylinders:number){
        super(car_color,Engine,Capacity,Noofcylinders);
        this.carname=carname;
  }
  startcar():string{
      return `The ${this.carname} is started`;
  }

  stopcar(): string{
      return `The ${this.carname} is stopped`;
  }
}
class Hatchback extends car{
  private carname:String;
  constructor(carname:String,car_color:String,Engine:String,Capacity:Number,Noofcylinders:number){
        super(car_color,Engine,Capacity,Noofcylinders);
        this.carname=carname;
  }
  startcar():string{
      return `The ${this.carname} is started`;
  }

  stopcar(): string{
      return `The ${this.carname} is stopped`;
  }
}

let Car:car = new shv("shv","Grey","nd-23",25,30);
console.log(Car.OpenCarLock());
console.log(Car.CloseCarLock());
console.log(Car.startcar());
console.log(Car.Accelarate());
console.log(Car.stopcar());
console.log('-------------------------');
let Car1:car = new sedan("sedan","white","Ng-23",31,39);
console.log(Car1.OpenCarLock());
console.log(Car1.CloseCarLock());
console.log(Car1.startcar());
console.log(Car1.Accelarate());
console.log(Car1.stopcar());
console.log('-------------------------');
let Car2:car = new Hatchback("Hatchback","Black","M-23",15,27);
console.log(Car2.CloseCarLock());
console.log(Car2.OpenCarLock());
console.log(Car2.startcar());
console.log(Car2.Accelarate());
console.log(Car2.stopcar());
