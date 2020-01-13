import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [];
  nbCourse  ;

  constructor(service : CourseServiceService) { 
    this.courses = service.getCourses();
    this.nbCourse = this.courses.length;
  }

  ngOnInit() {
  }

}
