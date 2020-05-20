import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.initDB()
  }
  private initDB() {
    const users = JSON.parse(localStorage.getItem('usuarios'));
    if(users && users.length === 0) {
      localStorage.setItem('usuarios', JSON.stringify([]));
    }
  }
}
