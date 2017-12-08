import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent }  from './animal-list.component';
import { AnimalNewComponent }  from './animal-new.component';
import { AnimalEditComponent }  from './animal-edit.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AnimalListComponent, AnimalNewComponent, AnimalEditComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
