import {TestBed} from '@angular/core/testing';

import {WebStorageService} from './web-storage.service';
import {HttpClient} from '@angular/common/http';

describe('WebStorageService', () => {
  let service: WebStorageService;

  beforeEach(() => {
    // create a mock service with mocked methods for testing
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get', 'put'])}
      ]
    });
    service = TestBed.inject(WebStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
