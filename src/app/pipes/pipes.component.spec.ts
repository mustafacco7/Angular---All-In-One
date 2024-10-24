import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesComponent } from './pipes.component';
import { AppendPipe } from './append/append.pipe';
import { SummaryPipe } from './summary/summary.pipe';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

describe('PipesComponent', () => {
  let component: PipesComponent;
  let fixture: ComponentFixture<PipesComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipesComponent, AppendPipe, SummaryPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(PipesComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transform text to uppercase using built-in uppercase pipe', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const uppercaseText = compiled.querySelector('.uppercase-text')?.textContent;
    expect(uppercaseText).toBe('ANGULAR PIPES');
  });

  it('should format number using built-in number pipe', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const formattedNumber = compiled.querySelector('.formatted-number')?.textContent;
    expect(formattedNumber).toBe('28,562');
  });

  it('should format date using built-in date pipe', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const formattedDate = compiled.querySelector('.formatted-date')?.textContent;
    expect(formattedDate).toContain('2023');
  });

  it('should transform text using custom append pipe', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const appendedText = compiled.querySelector('.appended-text')?.textContent;
    expect(appendedText).toBe('city name: New York');
  });

  it('should transform text using custom summary pipe', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const summaryText = compiled.querySelector('.summary-text')?.textContent;
    expect(summaryText).toBe('Lorem ipsu');
  });

  it('should display observable data using async pipe', () => {
    component.observableData$ = of(5);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const observableData = compiled.querySelector('.observable-data')?.textContent;
    expect(observableData).toBe('5');
  });

  it('should display language message using i18nSelect pipe', () => {
    component.language = 'fr';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const languageMessage = compiled.querySelector('.language-message')?.textContent;
    expect(languageMessage).toBe('Langue française sélectionnée.');
  });
});
