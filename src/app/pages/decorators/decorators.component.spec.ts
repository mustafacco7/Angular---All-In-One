import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecoratorsComponent } from './decorators.component';

describe('DecoratorsComponent', () => {
  let component: DecoratorsComponent;
  let fixture: ComponentFixture<DecoratorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecoratorsComponent]
    });
    fixture = TestBed.createComponent(DecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should have a title in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Angular Decorators');
  });

  it('should have navigation buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should navigate to input-decorator on button click', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[routerLink="/input-decorator"]') as HTMLElement;
    expect(button).toBeTruthy();
  });
});
