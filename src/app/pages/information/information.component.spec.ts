import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationComponent } from './information.component';

describe('InformationComponent', () => {
  let component: InformationComponent;
  let fixture: ComponentFixture<InformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as titleH1 'Informação'`, () => {
    const fixture = TestBed.createComponent(InformationComponent);
    const app = fixture.componentInstance;
    expect(app.titleH1).toEqual('Informação');
  });

  it('should render titleH1', () => {
    const fixture = TestBed.createComponent(InformationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.container .title h1')?.textContent
    ).toContain('Informação');
  });

  it(`should have as titleH2 'Características dos Personagens'`, () => {
    const fixture = TestBed.createComponent(InformationComponent);
    const app = fixture.componentInstance;
    expect(app.titleH2).toEqual('Características dos Personagens');
  });

  it('should render titleH2', () => {
    const fixture = TestBed.createComponent(InformationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.container .title h2')?.textContent
    ).toContain('Características dos Personagens');
  });

});
