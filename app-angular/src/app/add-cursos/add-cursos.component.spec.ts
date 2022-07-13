import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCursosComponent } from './add-cursos.component';

describe('AddCursosComponent', () => {
  let component: AddCursosComponent;
  let fixture: ComponentFixture<AddCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
