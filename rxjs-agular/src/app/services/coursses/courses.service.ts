import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '@interfaces/course.interface';
import { Lesson } from '@interfaces/lesson.interfaces';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  loadCourseById(courseId: number) {
    return this.http.get<Course>(`/api/courses/${courseId}`).pipe(shareReplay());
  }

  loadAllCourseLessons(courseId: number): Observable<Lesson[]> {
    return this.http
      .get<Lesson[]>('/api/lessons', {
        params: {
          pageSize: '10000',
          courseId: courseId.toString(),
        },
      })
      .pipe(
        map(res => res['payload']),
        shareReplay(),
      );
  }

  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses').pipe(
      map(res => res['payload']),
      shareReplay(),
    );
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    return this.http.put(`/api/courses/${courseId}`, changes).pipe(shareReplay());
  }

  searchLessons(search: string): Observable<Lesson[]> {
    return this.http
      .get<Lesson[]>('/api/lessons', {
        params: {
          filter: search,
          pageSize: '100',
        },
      })
      .pipe(
        map(res => res['payload']),
        shareReplay(),
      );
  }
}
