import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {PanelMenuModule} from 'primeng/panelmenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
	imports: [
		BrowserModule,
		PanelMenuModule,
		BrowserAnimationsModule,
		HttpClientModule,
		// FormsModule,
		// ReactiveFormsModule
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
