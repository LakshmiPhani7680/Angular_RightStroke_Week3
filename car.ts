export class car{
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
  StartCar=()=>{
      return "The car is started";
  }
  StopCar=()=>{
      return "The Car is stopped";
  }
  Accelarate=()=>{
      return "The Car is accelerating";
  }
  OpenCarLock=()=>{
      return "The Car door is opened";
  }
  CloseCarLock=()=>{
      return "The Car door is closed";
  }
}
let Car:car = new car("Gold","DOHC I-4/111kW Drive Motor",50,8);
console.log(Car.OpenCarLock())
console.log(Car.CloseCarLock());
console.log(Car.StartCar());
console.log(Car.Accelarate());
console.log(Car.StopCar());
