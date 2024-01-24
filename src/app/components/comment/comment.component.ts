import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  comments: string[] = ['I hope I can learn how to use Angular', 'How can I add more comments?'];

  addComment(comment: string){
    this.comments.push(comment);
  }

}
