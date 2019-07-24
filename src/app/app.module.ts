import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgTextareaAutoresizeModule } from './../../projects/ng-textarea-autoresize/src/lib/ng-textarea-autoresize.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CommonModule, NgTextareaAutoresizeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
