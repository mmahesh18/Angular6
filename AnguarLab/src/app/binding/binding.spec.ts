import { TestBed, async } from '@angular/core/testing';

import { BindingComponent } from './binding.component';

describe('ATB Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BindingComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(BindingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(BindingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Binding');

  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(BindingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Binding');
  }));
});
