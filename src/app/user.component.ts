import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from './user.service';
import { User } from './user';

@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService]
})

export class UserForm{
    @Output() newUser: EventEmitter<any> = new EventEmitter();

    data: FormGroup;
    id = 12;

    constructor(private fb: FormBuilder,
                private userService: UserService) {
        this.createForm();
    }

    createForm() {
        this.data = this.fb.group({
            id: this.id,
            name: ['', Validators.required ],
            username: ['', Validators.required ],
            email: ['', Validators.email ],
            website: ['', Validators.required ],
            phone: ['', Validators.required ],
            address: this.fb.group({
                street: ['', Validators.required ],
                suite: ['', Validators.required ],
                city: ['', Validators.required ],
                zipcode: ['', Validators.required ]
            }),
            company: this.fb.group({
                name: ['', Validators.required ],
                catchPhrase: ['', Validators.required ],
                bs: ['', Validators.required ]
            })
        })
    }

    validateAllFormFields(formGroup: FormGroup) {         
        Object.keys(formGroup.controls).forEach(field => {  
            const control = formGroup.get(field);             
            if (control instanceof FormControl) {             
               control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {        
                this.validateAllFormFields(control);            
            }
        });
    }

    onSubmit() {
        if(this.data.valid){
            this.data.value.id = this.id;
            this.userService.saveUser(this.data.value); //if there was an api request
            this.id = this.id + 1;
            this.newUser.emit(this.data.value);
            this.data.reset();
        }else{
            this.validateAllFormFields(this.data);
        }               
    }
}

