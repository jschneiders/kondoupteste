import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
    private usersUrl = 'https://jsonplaceholder.typicode.com/users';

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) { }

    getUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }

    saveUser(user: User): Observable<User> {
        const newUser = Object.assign(user);
        return newUser;
    } 
    
}