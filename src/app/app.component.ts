import { Component } from '@angular/core';

const USER_INFO = [
  {"name": "Jhon Smith", "occupation": "Advisor", "dateOfBirth": "1984-05-05", "age": 36},
  {"name": "Jane Dow", "occupation": "Developer", "dateOfBirth": "1992-02-02", "age": 28},
  {"name": "Peter Adams", "occupation": "HR", "dateOfBirth": "200-01-01", "age": 20},
  {"name": "Lora Bay", "occupation": "Marketing", "dateOfBirth": "1977-03-03", "age": 43}
];

type schema = { [key: string]: string };
const USER_SCHEMA: schema = {
  name: "text",
  occupation: "text",
  dateOfBirth: "date",
  age: "number",
  edit: "edit",
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  displayColumns: string[] = ['name', 'occupation', 'dateOfBirth', 'age', 'edit'];
  
  dataSource = USER_INFO;
  dataSchema = USER_SCHEMA;


}
