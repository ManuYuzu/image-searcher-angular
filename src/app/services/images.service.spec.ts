import { TestBed } from '@angular/core/testing';

import { ImagesService } from './images.service';
import { HttpClientModule } from '@angular/common/http';

describe('ImagesService', () => {
  let service: ImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request to Pixabay', (done: DoneFn) => {
    service.search('yellow flower').subscribe((value: any) => {
      expect(value.total).toBeGreaterThanOrEqual(0)
      expect(Array.isArray(value.hits)).toBeTrue()
      done()
    })
  })
});
