import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent } from './partials/sidebar-nav/sidebar-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoaderComponent } from './loader/loader.component';
import { MessagesComponent } from './messages/messages.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SidebarNavComponent,
    LoaderComponent,
    MessagesComponent,
    CourseCardComponent,
    CourseDialogComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,

    MatDatepickerModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
  ],
  exports: [SidebarNavComponent, LoaderComponent, MessagesComponent,CourseCardComponent],
})
export class SharedModule {}
