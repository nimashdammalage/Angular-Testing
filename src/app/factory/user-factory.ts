import {UserListService} from '../user-list/user-list.service';
import {map} from 'rxjs/operators';
import {User} from '../user/user';
import {Observable} from 'rxjs';

export class UserFactory {
  constructor(private userListService: UserListService) {
  }

  public createDummyUser(): Observable<User> {
    return this.userListService.getAll().pipe(
      map(users => users[0]),
      map(user => {
        return {
          ...user,
          name: 'Dummy name'
        } as User;
      })
    );
  }

  public selectUsers(key: string): Observable<User[]> {
    return this.userListService.filter(key);
  }
}
