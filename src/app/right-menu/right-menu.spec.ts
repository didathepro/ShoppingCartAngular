import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RightMenu } from './right-menu';

describe('RightMenu', () => {
  let component: RightMenu;
  let fixture: ComponentFixture<RightMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(RightMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
