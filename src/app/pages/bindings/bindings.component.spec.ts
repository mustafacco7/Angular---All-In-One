import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BindingsComponent } from './bindings.component';

describe('BindingsComponent', () => {
  let component: BindingsComponent;
  let fixture: ComponentFixture<BindingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingsComponent]
    });
    fixture = TestBed.createComponent(BindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined component instance', () => {
    expect(component).toBeDefined();
  });

  it('should have a title property', () => {
    expect(component.title).toBeDefined();
  });

  it('should render the title in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(component.title);
  });
});
