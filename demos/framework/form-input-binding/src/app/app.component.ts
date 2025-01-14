﻿import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TextBoxComponent } from '@smart-webcomponents-angular/textbox';

import 'smart-webcomponents-angular/source/smart.core.js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;

	app = new window.Smart.App({
		data: {
			message: "Hello World"
		}
	});

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.
		this.app = new window.Smart.App({
			data: {
				message: "Hello World"
			}
		});
	}
}