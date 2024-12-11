import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagEncuestasComponent } from './pag-encuestas.component';

describe('PagEncuestasComponent', () => {
  let component: PagEncuestasComponent;
  let fixture: ComponentFixture<PagEncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagEncuestasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
