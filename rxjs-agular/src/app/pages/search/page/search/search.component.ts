import { Component, OnInit } from '@angular/core';
import { Lesson } from '@interfaces/lesson.interfaces';
import { CoursesService } from '@services/coursses/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchResults$: Observable<Lesson[]>;

  activeLesson: Lesson;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {}

  onSearch(search: string) {
    this.searchResults$ = this.coursesService.searchLessons(search);
  }

  openLesson(lesson: Lesson) {
    this.activeLesson = lesson;
  }

  onBackToSearch() {
    this.activeLesson = null;
  }
}
