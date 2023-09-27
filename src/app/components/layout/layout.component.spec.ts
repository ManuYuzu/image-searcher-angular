import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [LayoutComponent]
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should give results when clicking on "Buscar" button searching for "Car"', async () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const searchButton = compiled.querySelector('.layout-content-main__search-box--button')

    component.search = 'Car'

    searchButton.click()

    await fixture.whenStable().then(() => {
      expect(component.imagesResult?.length).toBe(12)
    })
  })

  it('should give no results when clicking on "Buscar" button searching for "esternocleidomastoideox"', async () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const searchButton = compiled.querySelector('.layout-content-main__search-box--button')

    component.search = 'esternocleidomastoideox'

    searchButton.click()

    await fixture.whenStable().then(() => {
      expect(component.imagesResult?.length).toBe(0)
    })
  })
});
