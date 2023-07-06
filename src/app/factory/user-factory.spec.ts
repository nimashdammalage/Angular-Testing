import {UserFactory} from './user-factory';
import {of} from 'rxjs';
import {User} from '../user/user';

describe('UserFactory', () => {
  let userFactory: UserFactory;
  const fakeUserList = [{name: 'Nimal'} as User];
  let userListServiceSpy: any;

  beforeEach(() => {
    userListServiceSpy = jasmine.createSpyObj('MockUserListService', ['getAll', 'filter']);
    userListServiceSpy.getAll.and.returnValue(of(fakeUserList));
    userListServiceSpy.filter.and.returnValue(of(fakeUserList));

    userFactory = new UserFactory(userListServiceSpy);
  });

  it('should call getAll()', (done: DoneFn) => {
    userFactory.createDummyUser().subscribe(user => {
      expect(user.name).toBe('Dummy name');
      expect(userListServiceSpy.getAll).toHaveBeenCalled();
      done();
    });
  });

  it('should call filter()', (done: DoneFn) => {
    userFactory.selectUsers(fakeUserList[0].name).subscribe(users => {
      expect(users[0].name).toBe(fakeUserList[0].name);
      expect(userListServiceSpy.filter).toHaveBeenCalledWith(fakeUserList[0].name);
      done();
    });
  });

  // adding this. too lazy to code

  // it('was called with specific numbers on successive calls', () => {
  //   const spiedSumOddNumbers =
  //     jasmine.createSpy('sumOddNumbersSpy', 'sumOddNumbers')
  //       .and.callFake(() => 0);
  //   const maths = new Maths(spiedSumOddNumbers);
  //   maths.someMethod(true, 10);
  //   maths.someMethod(false, 60);
  //   maths.someMethod(true, 60);
  //   maths.someMethod(true, 99);
  //
  //   expect(spiedSumOddNumbers.calls.allArgs()).toEqual([
  //     [10],
  //     [60],
  //     [99]
  //   ]);
  // });
});
