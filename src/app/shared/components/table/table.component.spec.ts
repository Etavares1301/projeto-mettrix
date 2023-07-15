import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TableInformationService } from '../../../services/table-information.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

let service: TableInformationService;
let httpTestingController: HttpTestingController;
let httpClient: HttpClient;

let  apiUrl:string = 'https://rickandmortyapi.com/api/character/';


describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      providers: [TableInformationService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  

  it('should decrement currentPage and call getFilter() when valueFilter or typeParamFilter is truthy', () => {
    const valueFilter = 'exampleValueFilter';
    const typeParamFilter = 'exampleTypeParamFilter';
    const currentPage = 2;

    component.valueFilter = valueFilter;
    component.typeParamFilter = typeParamFilter;
    component.currentPage = currentPage;

    spyOn(component, 'getFilter');

    component.previousPage();

    expect(component.currentPage).toBe(currentPage - 1);
    expect(component.getFilter).toHaveBeenCalledWith(valueFilter, typeParamFilter, currentPage - 1);
  });

  it('should decrement currentPage and call loadCharacters() when valueFilter is an empty string', () => {
    const valueFilter = '';
    const currentPage = 2;

    component.valueFilter = valueFilter;
    component.currentPage = currentPage;

    spyOn(component, 'loadCharacters');

    component.previousPage();

    expect(component.currentPage).toBe(currentPage - 1);
    expect(component.loadCharacters).toHaveBeenCalled();
  });});
