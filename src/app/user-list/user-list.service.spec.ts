import {TestBed} from '@angular/core/testing';

import {UserListService} from './user-list.service';

const memberCount = 16;
describe('UserListService', () => {
  let service: UserListService;

  beforeEach(() => {
    service = new UserListService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // wait until async data is received and test
  it(`should return a user list with ${memberCount} members`, (done: DoneFn) => {
    service.getAll().then(response => {
      expect(response.length).toBe(memberCount);
      done();
    });
  });
});
