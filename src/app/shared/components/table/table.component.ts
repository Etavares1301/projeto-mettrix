import { Component, OnInit } from '@angular/core';
import { TableInformationService } from 'src/app/services/table-information.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public response: any[] = [];
  public currentPage: any = 1;
  public totalPages = 0;
  public typeFilter = ['status', 'species', 'type', 'gender'];
  public valueFilter = '';
  public typeParamFilter: string | null = null;

  constructor(private tableInformationService: TableInformationService) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  public getCharacter() {
    const character = this.tableInformationService.apiCharacter();
    character.subscribe((res) => {
      this.response = res.results;
      this.totalPages = res.info.pages;
    });
  }

  public getFilter(
    value: string,
    param: string | null,
    numberPage: number | null
  ): void {
    // debugger
    this.valueFilter = value;
    this.typeParamFilter = param;
    this.currentPage = numberPage;

    this.tableInformationService
      .getFilter(value, param ?? 'name', numberPage ?? 0)
      .subscribe(
        (response) => {
          this.response = response.results;
          this.typeFilter = ['status', 'species', 'type', 'gender'];
          this.currentPage = numberPage;
        },
        (error) => {
          console.log(error.status);

          if (error.status !== 200) {
            console.log('Array original:', this.typeFilter);

            const firstTypeFilter = this.typeFilter.shift();
            if (firstTypeFilter) {
              this.getFilter(value, firstTypeFilter, null);
            }
          }
        }
      );
  }

  public loadCharacters() {
    this.tableInformationService.getCharacters(this.currentPage).subscribe(
      (res) => {
        this.response = res.results;
        this.totalPages = res.info.pages;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public nextPage(): void {
    if (this.valueFilter || this.typeParamFilter) {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getFilter(
          this.valueFilter,
          this.typeParamFilter,
          this.currentPage
        );
      }
    } else if (this.valueFilter == '') {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.loadCharacters();
      }
    }
  }

  public previousPage(): void {
    if (this.valueFilter || this.typeParamFilter) {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getFilter(
          this.valueFilter,
          this.typeParamFilter,
          this.currentPage
        );
      }
    } else if (this.valueFilter == '')
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadCharacters();
      }
  }
}
