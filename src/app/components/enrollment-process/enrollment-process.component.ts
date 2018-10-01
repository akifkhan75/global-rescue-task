import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-enrollment-process',
  templateUrl: './enrollment-process.component.html',
  styleUrls: ['./enrollment-process.component.css']
})
export class EnrollmentProcessComponent implements OnInit {

  isLinear = false;
  planSelectForm: FormGroup;
  memberDetails: FormGroup;
  additionsForm: FormGroup;
  checkOutForm: FormGroup;

  // plan select
  memberShip: string = 'Please Select';
  memberShipType: string = 'Please Select';
  memberShipTerm: string = 'Please Select';
  maxTripLength: string = 'Please Select';

  addFamilyForm:boolean = false;

  addresses = [
    {id: 'Residence', value: 'Residence'},
    {id: 'Mailing', value: 'Mailing'},
    {id: 'Other', value: 'Other'}
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.planSelectForm = this._formBuilder.group({
      memberShip: ['', Validators.required],
      memberShipType: ['', Validators.required],
      memberShipTerm: ['', Validators.required],
      maxTripLength: ['', Validators.required],
      memberShipSecurity: ['']
    });
    this.memberDetails = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNo: ['', Validators.required],
      birthDate: ['', Validators.required],
      memberShipStartDate: ['', Validators.required],
      sattelitePhone: [''],
    });
    this.additionsForm = this._formBuilder.group({
      test: ['']
    });
    this.checkOutForm = this._formBuilder.group({
      test: ['']
    })
  }

  updatePlanSelectSummary(){
    this.memberShip = this.planSelectForm.get('memberShip').value !="" ? this.planSelectForm.get('memberShip').value : 'Please Select';
    this.memberShipType = this.planSelectForm.get('memberShipType').value !="" ? this.planSelectForm.get('memberShipType').value : 'Please Select';;
    this.memberShipTerm = this.planSelectForm.get('memberShipTerm').value !="" ? this.planSelectForm.get('memberShipTerm').value : 'Please Select';;
    this.maxTripLength = this.planSelectForm.get('maxTripLength').value !="" ? this.planSelectForm.get('maxTripLength').value : 'Please Select';;
  }

  addMemberShipPlan(data){
    if(this.planSelectForm.valid){
      console.log(data)
    } else {
      this.planSelectForm.controls['firstName'].markAsTouched();
      this.planSelectForm.controls['lastName'].markAsTouched();
      this.planSelectForm.controls['phoneNo'].markAsTouched();
      this.planSelectForm.controls['birthDate'].markAsTouched();
    }
  }

  addMemberInfo(data){
    if(this.memberDetails.valid){
      console.log(data)
    } else {
      this.memberDetails.controls['memberShip'].markAsTouched();
      this.memberDetails.controls['memberShipType'].markAsTouched();
      this.memberDetails.controls['memberShipTerm'].markAsTouched();
      this.memberDetails.controls['maxTripLength'].markAsTouched();
    }
  }

}
