import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsComponent } from './forms.component';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FormsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormsComponent);
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
    expect(compiled.querySelector('h3')?.textContent).toContain('Angular Forms');
  });

  it('should have navigation buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(5);
  });

  it('should navigate to driven-form on button click', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[routerLink="/driven-form"]');
    expect(button).toBeTruthy();
  });

  it('should navigate to reactive-form on button click', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[routerLink="/reactive-form"]');
    expect(button).toBeTruthy();
  });

  it('should navigate to reactive-form-with-form-builder on button click', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[routerLink="/reactive-form-with-form-builder"]');
    expect(button).toBeTruthy();
  });

  it('should navigate to form-with-custom-validations on button click', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[routerLink="/form-with-custom-validations"]');
    expect(button).toBeTruthy();
  });

  it('should navigate to home on button click', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[routerLink="/home"]');
    expect(button).toBeTruthy();
  });
});
