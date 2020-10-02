export class Union{

  displayType=(code: (string | number))=>
{
  if(typeof(code) === "number")
      console.log(code+'is number.')
  else if(typeof(code) === "string")
      console.log(code + 'is string.');
}

}
let u:Union = new Union()
u.displayType("RightStroke");
u.displayType(42);
