import { Component } from '@angular/core';

const USER_INFO = [
  {"name": "Jhon Smith", "occupation": "Advisor", "age": 36},
  {"name": "Jane Dow", "occupation": "Developer", "age": 28},
  {"name": "Peter Adams", "occupation": "HR", "age": 20},
  {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
]

const USER_SCHEMA = {
  name: "text",
  occupation: "text",
  age: "number",
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  displayColumns: string[] = ['name', 'occupation', 'age', 'edit'];
  
  dataSource = USER_INFO;
  dataSchema = USER_SCHEMA;


}
