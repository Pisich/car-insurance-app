import { TestBed } from '@angular/core/testing';

import { BackendConsumerService } from './backend-consumer.service';

describe('BackendConsumerService', () => {
  let service: BackendConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
