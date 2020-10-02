//Function with default parameters
function Attendance(name: string, presence: string = "Present") : string {
    return name +" is " +presence + ' ' + '!';
}

console.log(Attendance('ravi'));
console.log(Attendance('divya', 'Present')); 
console.log(Attendance('sanjay')); 

//Functions with  optinal parameters
function Attend(presense: string, name?: string ) : string {
    return  name+" is "+presense + "!";
}

console.log(Attend('Present','Radha'));
console.log(Attend('Present')); 

//Function with rest parameters
function Attendies(presense: string, ...names: string[]) {
    return  names.join(", ")+" are "+presense + "!";
}

console.log(Attendies("Present", "Srinu", "Pavan"));

console.log(Attendies("Present"));
