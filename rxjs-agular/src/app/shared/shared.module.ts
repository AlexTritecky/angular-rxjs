import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent } from './partials/sidebar-nav/sidebar-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoaderComponent } from './loader/loader.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [SidebarNavComponent, LoaderComponent, MessagesComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  exports:[
    SidebarNavComponent,
    LoaderComponent,
    MessagesComponent
  ]
})
export class SharedModule { }
