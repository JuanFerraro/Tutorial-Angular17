import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root', /* To call the component */
  standalone: true, /* Components that don't need a module */
  imports: [CommonModule, RouterOutlet, UserComponent],
  templateUrl: './app.component.html', /* Point towards .html file */
  styleUrl: './app.component.css', /* Point towards .css file */
})
export class AppComponent {
  /*
      Each component has three parts:
      .ts (This one)
      .css
      .html
  */

  user_city: string = 'Medellin'; /* Variable used to show Data Binding */
  user_occupation: string = 'Student'
  count: number = 0

  increaseCount(num: number){
    this.count++;
  }

}
