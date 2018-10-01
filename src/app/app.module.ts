import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators, 
  FormBuilder } from '@angular/forms';

import { MatCardModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatRadioModule, MatDividerModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EnrollmentProcessComponent } from './components/enrollment-process/enrollment-process.component';

const routes: Routes = [
  {path: '', component: EnrollmentProcessComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EnrollmentProcessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
