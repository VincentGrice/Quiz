import { Component } from '@angular/core';
import {QuestionComponent} from './question/question.component';

@Component({
  selector: 'app-root',
  template:'<app-question></app-question>',
})
export class AppComponent {
  title = ' my app';
}
