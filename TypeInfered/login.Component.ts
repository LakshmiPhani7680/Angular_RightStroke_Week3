import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
   }
   public username:String;
    public password:String;
    public doAuth(){
       
    }

    ngOnInit(): void {
  }

}
