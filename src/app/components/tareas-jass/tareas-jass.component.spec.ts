import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasJassComponent } from './tareas-jass.component';

describe('TareasJassComponent', () => {
  let component: TareasJassComponent;
  let fixture: ComponentFixture<TareasJassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasJassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasJassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
