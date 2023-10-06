import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemProdutosComponent } from './mantem-produtos.component';

describe('MantemProdutosComponent', () => {
  let component: MantemProdutosComponent;
  let fixture: ComponentFixture<MantemProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantemProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantemProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
