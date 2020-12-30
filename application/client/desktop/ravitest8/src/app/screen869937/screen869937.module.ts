import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Screen869937Component } from './screen869937.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: Screen869937Component },
        ])
    ],
    declarations: [
        Screen869937Component,
    ]
})
export class Screen869937Module { }