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

import { MatCardModule, MatMenuModule, MatStepperModule, MatFormFieldModule,
   MatInputModule, MatButtonModule, MatIconModule, MatRadioModule, 
   MatDividerModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, 
   MatSelectModule, 
   MatSidenavModule} from '@angular/material';

import { Ng2StickyModule } from 'ng2-sticky';

import { AppComponent } from './app.component';
import { EnrollmentProcessComponent } from './components/enrollment-process/enrollment-process.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavService } from './service/side-nav.service';

const routes: Routes = [
  {path: '', component: EnrollmentProcessComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EnrollmentProcessComponent,
    HeaderComponent,
    FooterComponent
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
    MatSelectModule,
    Ng2StickyModule,
    MatSidenavModule
  ],
  providers: [MatDatepickerModule,SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
