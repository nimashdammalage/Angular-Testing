import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {Router, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {Location} from '@angular/common';

const fakeRoutes: Routes = [
  {path: 'dashboard', component: UserListComponent},
  {path: 'user', component: ViewUserComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

describe('AppComponent', () => {
  let router: Router;
  let location: Location;
  let fixture;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(fakeRoutes)],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to "" redirects you to /dashboard', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/dashboard');
  }));

  it('navigate to "search" takes you to /user', fakeAsync(() => {
    router.navigate(['user']);
    tick();
    expect(location.path()).toBe('/user');
  }));
});
