import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@smart-webcomponents-angular/button';
import { DropDownButtonModule } from '@smart-webcomponents-angular/dropdownbutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, DropDownButtonModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
