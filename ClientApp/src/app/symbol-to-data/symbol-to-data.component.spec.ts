import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolToDataComponent } from './symbol-to-data.component';

describe('SymbolToDataComponent', () => {
  let component: SymbolToDataComponent;
  let fixture: ComponentFixture<SymbolToDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolToDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolToDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
