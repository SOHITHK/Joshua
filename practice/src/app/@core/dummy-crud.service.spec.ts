import { TestBed } from '@angular/core/testing';

import { DummyCrudService } from './dummy-crud.service';

describe('DummyCrudService', () => {
  let service: DummyCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
