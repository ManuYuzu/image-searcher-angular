import { TestBed } from '@angular/core/testing';

import { ImagesService } from './images.service';

describe('ImagesService', () => {
  let service: ImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request to Pixabay', (done: DoneFn) => {
    service.search('Bob Esponja').subscribe(value => {
      expect(Array.isArray(value)).toBeTrue()
      done()
    })
  })
});
