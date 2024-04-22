import { Component } from '@angular/core';
import { PesronService } from '../persons_service/pesron.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  person: any;
  formSubmitted: boolean = false;
  constructor(private personService: PesronService) {}

  ngOnInit(): void {
    this.allPersons();
  }

  allPersons() {
    this.personService.getAll().subscribe((data: any) => {
      this.person = Object.values(data)[0];
      console.log('persons', this.person);
    });
  }

  addForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    nationalityID: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
  });
  get name(): FormControl {
    return this.addForm.get('name') as FormControl;
  }
  get name_ar(): FormControl {
    return this.addForm.get('age') as FormControl;
  }

  get nationalityID(): FormControl {
    return this.addForm.get('nationalityID') as FormControl;
  }
  get birthDate(): FormControl {
    return this.addForm.get('birthDate') as FormControl;
  }

  Submitted() {
    if (this.addForm.valid) {
      this.formSubmitted = true;
      this.personService.addPerson(this.addForm.value).subscribe(
        () => {
          // this.addForm.reset();
          this.allPersons();
        },
        () => {}
      );
    } else {
    }
  }
}
