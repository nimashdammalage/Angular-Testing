import {Component, OnInit} from '@angular/core';
import {User} from '../user/user';
import {UserListService} from './user-list.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public users$: Observable<User[]>;

  constructor(private userListService: UserListService) {
    this.users$ = this.userListService.getAll();
  }

  public update(text: string): void {
    this.users$ = this.userListService.filter(text);
  }

}
