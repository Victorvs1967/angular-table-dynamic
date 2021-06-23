import { Component } from '@angular/core';

const USER_INFO = [
  {"name": "Jhon Smith", "occupation": "Advisor", "age": 36},
  {"name": "Jane Dow", "occupation": "Developer", "age": 28},
  {"name": "Peter Adams", "occupation": "HR", "age": 20},
  {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataSource = USER_INFO;
  displayColumns: string[] = ['name', 'occupation', 'age'];

  
}
