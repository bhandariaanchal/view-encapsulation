import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { viewParentEl } from '@angular/core/src/view/util';

@Component({
  selector: 'app-student',


  template: '<h1>{{student}}</h1>',


  styleUrls: ['./student.component.scss'],


  encapsulation: 3
})
export class StudentComponent  {
student = 'I am being called from student component';

}
