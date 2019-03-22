import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  nameOfApp:string = 'Planner';

  goals:any[];
  goalCounter:number = 0;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit ran.....');
    this.goals = [];

  }


  //add goal function
  addGoal(goal){
    console.log("add: " + goal);
    this.goals.unshift(goal);
    return false;
  }

  //delete goal function
  deleteGoal(goal){
    console.log("delete: " + goal);
    for (var i = 0 ; i<this.goals.length;i++){
      if(this.goals[i]==goal){
        this.goals.splice(i,1);
        this.goalCounter=this.goalCounter+1;
        break;
      }
    }
    return false;
  }

}
