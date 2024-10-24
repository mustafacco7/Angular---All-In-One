import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';

describe('AppModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  it('should create the app module', () => {
    const module = TestBed.inject(AppModule);
    expect(module).toBeTruthy();
  });
});
