import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesComponent } from './notes/notes.component';
import { TasksComponent } from './tasks/tasks.component';
import { LinksComponent } from './links/links.component';
import { SettingsComponent } from './settings/settings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CurrentMonthComponent } from './current-month/current-month.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageBoxComponent,
    NavbarComponent,
    NotesComponent,
    TasksComponent,
    LinksComponent,
    SettingsComponent,
    CalendarComponent,
    CurrentMonthComponent,
    FooterComponent,
    SearchBoxComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
