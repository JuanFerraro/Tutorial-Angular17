import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  username: string = 'J--n B-rr--s';
  userExist: boolean = true;
  programmingLanguages = ['Python', 'Java', 'TypeScript', 'JavaScript']

}
