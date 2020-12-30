import { Component, OnInit } from '@angular/core';
import { Screen869937Service } from './screen869937.service.ts';

@Component({
  selector: 'app-screen869937',
  templateUrl: './screen869937.component.html',
  styleUrls: ['./screen869937.component.scss'],
})

export class Screen869937Component implements OnInit {
    public email = {
        name: '',
        email: '',
    }

    constructor (
        private screen869937Service: Screen869937Service,
    ) { }

    ngOnInit() {
    }
}