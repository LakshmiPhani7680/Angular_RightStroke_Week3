export enum Days {
    Sunday = "Revision",
    Monday = "TypeScript Practice",
    Tuesday = "Angular Practice",
    Wednesday = "Java Practice",
    Thrusady = "Aptitude Practice",
    Friday = "Reasoning Practice",
    Saturday = "Core_Subs_Practice",
}
export class TimeTable{
    work=(Day:String)=>{
         for(var d in Days){
            if(Day==d)
                console.log("Welcome to "+d+" Mr.Phani, today's work is "+ Days[d]);
            
         }
    }

}
let t:TimeTable = new TimeTable();
t.work("Monday");


//OUTPUT
/*
Welcome to Sunday Mr.Phani, today's work is Revision
*/
