import {Injectable} from '@angular/core';
import {USERS} from '../mocks/users';
import {User} from '../user/user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() {
  }

  public getAll(): Observable<User[]> {
    return of(USERS);
  }

  public filter(text: string): Observable<User[]> {
    return of(USERS.filter(user => user.name.toLowerCase().includes(text.toLowerCase())));
  }
}
