import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with required controls', () => {
    expect(component.loginForm.contains('email')).toBeTrue();
    expect(component.loginForm.contains('password')).toBeTrue();
    expect(component.loginForm.invalid).toBeTrue();
  });

  it('should mark the email control as invalid when empty', () => {
    const emailControl = component.loginForm.get('email');

    expect(emailControl?.hasError('required')).toBeTrue();
  });
});
