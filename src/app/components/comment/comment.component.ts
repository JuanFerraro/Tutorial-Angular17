import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  comments = ['I hope I can learn how to use Angular', 'How can I add more comments?'];

  commentForm = new FormGroup({
    comment: new FormControl ('', Validators.required)
  });

  addComment(){
    this.comments.push(this.commentForm.value?.comment ?? '')
  }

}
