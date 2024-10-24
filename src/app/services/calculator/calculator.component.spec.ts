import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../calculator.service';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [ FormsModule ],
      providers: [ CalculatorService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    component.number1 = 5;
    component.number2 = 3;
    component.addOperation();
    expect(component.answer).toBe(8);
  });

  it('should subtract two numbers correctly', () => {
    component.number1 = 5;
    component.number2 = 3;
    component.subtractOperation();
    expect(component.answer).toBe(2);
  });

  it('should multiply two numbers correctly', () => {
    component.number1 = 5;
    component.number2 = 3;
    component.multiplyOperation();
    expect(component.answer).toBe(15);
  });

  it('should divide two numbers correctly', () => {
    component.number1 = 6;
    component.number2 = 3;
    component.divideOperation();
    expect(component.answer).toBe(2);
  });

  it('should clear the inputs and answer', () => {
    component.number1 = 5;
    component.number2 = 3;
    component.answer = 8;
    component.clearHandle();
    expect(component.number1).toBeNaN();
    expect(component.number2).toBeNaN();
    expect(component.answer).toBe(0);
  });
});
