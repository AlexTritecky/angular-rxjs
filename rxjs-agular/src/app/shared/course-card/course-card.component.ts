import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Course } from '@interfaces/course.interface';
import { CourseDialogComponent } from '@shared/course-dialog/course-dialog.component';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent implements OnInit {
  @Input()
  courses: Course[] = [];

  @Output()
  private coursesChanged = new EventEmitter();
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(
        filter(val => !!val),
        tap(() => this.coursesChanged.emit()),
      )
      .subscribe();
  }
}
