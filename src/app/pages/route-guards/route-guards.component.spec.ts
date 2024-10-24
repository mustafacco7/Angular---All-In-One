import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouteGuardsComponent } from './route-guards.component';
import { CommonVariables } from 'src/app/common/CommonVariables';

describe('RouteGuardsComponent', () => {
  let component: RouteGuardsComponent;
  let fixture: ComponentFixture<RouteGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteGuardsComponent],
      imports: [FontAwesomeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RouteGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle authentication status', () => {
    const initialAuthStatus = component.isAuthenticated;
    component.setAuth();
    expect(component.isAuthenticated).toBe(!initialAuthStatus);
    expect(CommonVariables.isAuthenticated).toBe(!initialAuthStatus);
  });

  it('should set user type to admin', () => {
    component.setType('A');
    expect(component.userType).toBe('admin');
    expect(CommonVariables.userType).toBe('admin');
  });

  it('should set user type to seller', () => {
    component.setType('S');
    expect(component.userType).toBe('seller');
    expect(CommonVariables.userType).toBe('seller');
  });

  it('should set user type to user', () => {
    component.setType('U');
    expect(component.userType).toBe('user');
    expect(CommonVariables.userType).toBe('user');
  });

  it('should set user type to default user for invalid input', () => {
    component.setType('invalid');
    expect(component.userType).toBe('user');
    expect(CommonVariables.userType).toBe('user');
  });
});
