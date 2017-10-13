import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    constructor(private fb: FormBuilder,
                private userService: UserService) {
        this.createForm();
    }

    createForm() {
        this.data = this.fb.group({
            name: ['', Validators.required ],
            username: ['', Validators.required ],
            email: ['', Validators.email ],
            website: '',
            phone: '',
            address: this.fb.group({
                street: '',
                suite: '',
                city: '',
                zipcode: ''
            }),
            company: this.fb.group({
                name: '',
                catchPhrase: '',
                bs: ''
            })
        })
    }

    onSubmit() {
        console.log(this.data.value);
        this.userService.saveUser(this.data.value); //if there was an api request
        this.newUser.emit(this.data.value);
    }
}

