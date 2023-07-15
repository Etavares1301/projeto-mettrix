import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { EventEmitter } from '@angular/core';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have emmitSearch as new EventEmitter()`, () => {
    expect(component.emmitSearch).toEqual(jasmine.any(EventEmitter));
  });

  it(`should emit 'Rick' when calling search('Rick')`, () => {
    spyOn(component.emmitSearch, 'emit');
    const searchValue = 'Rick';
    component.search(searchValue);

    expect(component.emmitSearch.emit).toHaveBeenCalledWith(searchValue);
  });

});
