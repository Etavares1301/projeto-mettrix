import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TableInformationService } from './table-information.service';
import { HttpClient } from '@angular/common/http';

describe('TableInformationService', () => {
  let service: TableInformationService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  let apiUrl: string = 'https://rickandmortyapi.com/api/character/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TableInformationService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`shoud be load apiCharacter`, () => {
    service.apiCharacter().subscribe;
  });

  it(`should load methods GET from Character`, () => {
    const mockResponse = {};

    service.apiCharacter().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpTestingController.expectOne(apiUrl);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);

    it('should return characters based on page number', () => {
      const page = 1;
      const expectedUrl = `${service.apiUrl}?page=${page}`;

      service.getCharacters(page).subscribe((response) => {
        expect(response).toBeTruthy();
      });

      const req = httpTestingController.expectOne(expectedUrl);
      expect(req.request.method).toEqual('GET');
      req.flush({});
    });
  });

  it('should make a GET request to retrieve characters', () => {
    const page = 1;
    const apiUrl = 'your-api-url';

    service.getCharacters(page).subscribe((response) => {
      expect(response).toBeTruthy();
      // Add more assertions if needed
    });

    const req = httpTestingController.expectOne(`${apiUrl}?page=${page}`);
    expect(req.request.method).toBe('GET');
    req.flush({ /* Mock response */ });
  });

  it('should make a GET request with filter parameters when value is provided and numberPage > 0', () => {
    const value = 'exampleValue';
    const param = 'exampleParam';
    const numberPage = 1;
    const apiUrl = 'your-api-url';

    service.getFilter(value, param, numberPage).subscribe((response) => {
      expect(response).toBeTruthy();
      // Add more assertions if needed
    });

    const expectedUrl = `${apiUrl}?${param}=${value}&page=${numberPage}`;
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush({ /* Mock response */ });
  });

  it('should make a GET request with filter parameters when value is provided and numberPage = 0', () => {
    const value = 'exampleValue';
    const param = 'exampleParam';
    const numberPage = 0;
    const apiUrl = 'your-api-url';

    service.getFilter(value, param, numberPage).subscribe((response) => {
      expect(response).toBeTruthy();
      // Add more assertions if needed
    });

    const expectedUrl = `${apiUrl}?${param}=${value}`;
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush({ /* Mock response */ });
  });

  it('should make a GET request without filter parameters when value is not provided', () => {
    const value = '';
    const param = 'exampleParam';
    const numberPage = 0;
    const apiUrl = 'your-api-url';

    service.getFilter(value, param, numberPage).subscribe((response) => {
      expect(response).toBeTruthy();
      // Add more assertions if needed
    });

    const expectedUrl = `${apiUrl}`;
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush({ /* Mock response */ });
  });
});
