import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingService } from '@services/loading/loading.service';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { HttpClientModule } from '@angular/common/http';
import { AuthStore } from '@services/auth/auth.store';
import { MessagesService } from '@services/messages/messages.service';
import { SafeUrlPipe } from './common/safe-url.pipe';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AppComponent, SafeUrlPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    SharedModule
  ],
  providers: [LoadingService, AuthStore, MessagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
