import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ApiFriends } from '../../models/user.model';
import { ExampleService } from '../../services/example.service';

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
  pText: string = '🙉🙉🙉🙉🙉🙉🙉🙉🙉🙉🙉🙉' /* Used for Event Handling */

  /* Inject Services */
  _exampleService = inject(ExampleService);
  friendsList: ApiFriends[] = [];
  friends: boolean = false;

  /* @Input means that this componentc expect to recieve this variable from de Parent Component */
  @Input() city: string = "";

  /* @Ouput means that a event is going to the Parent Component */
  @Output() incrementCountEvent = new EventEmitter<number>();

  editable() {
    if (this.isEditable == true){
      this.isEditable = false
      this.pText = '🙉🙉🙉🙉🙉🙉🙉🙉🙉🙉🙉🙉'
    } else {
      this.isEditable = true
      this.pText = '🙊🙊🙊🙊🙊🙊🙊🙊🙊🙊🙊🙊'
    }
    console.log(this.isEditable)
  }

  increaseCount() {
    this.incrementCountEvent.emit(0);
  }

  seeFriends() {
    this._exampleService.getFriends().subscribe((data: ApiFriends[]) =>{
      this.friendsList = data;
    });
    this.friends = true;
    console.log(this.friendsList)
  }

}
