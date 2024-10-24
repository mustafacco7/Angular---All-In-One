import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectivesComponent } from './directives.component';

describe('DirectivesComponent', () => {
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesComponent]
    });
    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should have a title "Angular Directives"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Angular Directives');
  });

  it('should have a button with text "NgFor Directive"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button[routerLink="/ng-for-directive"]')?.textContent).toContain('NgFor Directive');
  });

  it('should have a button with text "NgIf Directive"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button[routerLink="/ng-if-directive"]')?.textContent).toContain('NgIf Directive');
  });

  it('should have a button with text "NgSwitchCase Directive"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button[routerLink="/ng-switch-case-directive"]')?.textContent).toContain('NgSwitchCase Directive');
  });

  it('should have a button with text "NgStyle Directive"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button[routerLink="/ng-style-directive"]')?.textContent).toContain('NgStyle Directive');
  });

  it('should have a button with text "NgClass Directive"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button[routerLink="/ng-class-directive"]')?.textContent).toContain('NgClass Directive');
  });

  it('should have a button with text "Custom Directive"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button[routerLink="/custom-directive"]')?.textContent).toContain('Custom Directive');
  });

  it('should have a button with text "Go Back"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button[routerLink="/home"]')?.textContent).toContain('Go Back');
  });
});
