import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseData } from '@interfaces/course.interface';
import { CoursesService } from '@services/coursses/courses.service';
import { combineLatest, map, Observable, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  data$: Observable<CourseData>;
  constructor(private route: ActivatedRoute, private coursesService: CoursesService) {}

  ngOnInit() {
    const courseId = parseInt(this.route.snapshot.paramMap.get('courseId'));

    const course$ = this.coursesService.loadCourseById(courseId).pipe(startWith(null));

    const lessons$ = this.coursesService.loadAllCourseLessons(courseId).pipe(startWith([]));

    this.data$ = combineLatest([course$, lessons$]).pipe(
      map(([course, lessons]) => {
        return {
          course,
          lessons,
        };
      }),
      tap(console.log),
    );
  }
}
