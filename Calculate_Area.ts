export class Triangle{
  triangle_area=(height:number,breadth:number)=>{
     return 0.5*height*breadth;
  }

}
export class Square{
  private V1:number;
  constructor(V1:number){
      this.V1=V1;
  }
  square_area=()=>{
      return this.V1*this.V1;
  }

}
export class Rectangle{
 private length: number;
 private breadth:number;
 private height:number;
 constructor(length:number,breadth:number,height:number){
     this.length=length;
     this.breadth=breadth;
     this.height=height;
 }
 rectangle_area=()=>{
     console.log("The surface area of a rectangle is "+2*((this.length*this.breadth)+(this.breadth*this.height)+(this.height*this.length)))
 }
}
let rectangle:Rectangle = new Rectangle(3,4,3);
rectangle.rectangle_area();
let square:Square = new Square(3);
console.log("The surface area of the square is "+square.square_area());
let triangle:Triangle =new Triangle();
console.log("The Surface area of the triangle "+triangle.triangle_area(2,2));




----------------------------------------------------------------------------
/**
The surface area of a rectangle is 66
The surface area of the square is 9
The Surface area of the triangle 2
**/

