import { Component, Input } from '@angular/core';

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
  programmingLanguages = ['Python', 'Java', 'TypeScript', 'JavaScript'];
  isEditable: boolean = false; /* Used for Property Binding: Component -> Template */
  pText: string = '🙉🙉🙉🙉🙉🙉' /* Used for Event Handling */

  /* @Input means that this componentc expect to recieve this variable from de Parent Component */
  @Input() city: string = "";

  editable() {
    if (this.isEditable == true){
      this.isEditable = false
      this.pText = '🙉🙉🙉🙉🙉🙉'
    } else {
      this.isEditable = true
      this.pText = '🙊🙊🙊🙊🙊🙊'
    }
    console.log(this.isEditable)
  }

}
