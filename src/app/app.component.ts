import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is a long text which has one of the most distributed title case ever.';
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }
}
