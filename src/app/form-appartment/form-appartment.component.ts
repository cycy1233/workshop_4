import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-appartment',
  templateUrl: './form-appartment.component.html',
  styleUrls: ['./form-appartment.component.css']
})
export class FormAppartmentComponent {
  apartForm!: FormGroup;
  ngOnInit() 
  { 
    this.apartForm = new FormGroup(
      {
      apartmentNumber: new FormControl ('',[ Validators.required,Validators.pattern('^[0-9]*$')]),
      floorNumber: new FormControl ('',[ Validators.required,Validators.pattern('^[0-9]*$')]),
      surface:  new FormControl('', Validators.required),
      terrace: new FormControl('', Validators.required),
      surfaceTerrace: new FormControl({value: '', disabled: true}, Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', [ Validators.required,Validators.minLength(10)]),
      residence: new FormControl('', Validators.required),
    });
    const terraceControl = this.apartForm.get('terrace');
    if (terraceControl) {
      terraceControl.valueChanges.subscribe(
        (terrace: string) => {
          if (terrace === 'yes') {
            this.apartForm.get('surfaceTerrace')!.enable();
          } else {
            this.apartForm.get('surfaceTerrace')!.disable();
          }
        }
      );
    }
  }
  

  onSubmit() {
    console.log(this.apartForm.value);
  }
}