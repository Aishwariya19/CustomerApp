import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomerApp';
  newFirstName: any = '';
  newLastName: any = '';
  newEmail: any = '';
  newSalary: any = 0;
  serverElements: any = [];

  onAddCustomer() {
      this.serverElements.push({
        type: 'Customer',
        FirstName: this.newFirstName,
        LastName: this.newLastName,
        Email: this.newEmail,
        Salary: this.newSalary
      });
    }
}
