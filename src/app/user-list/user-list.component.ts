import { Component, ViewChild } from '@angular/core';
import { MockApiService } from '../mock-api.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table'; 
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import * as _ from 'lodash';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSelectModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'age',
    'birthDate',
    'gender',
    'image',
  ];
  dataSource!: MatTableDataSource<any>;
  originalDataSource!: MatTableDataSource<any>;
  users: any = [];
  defaultGender: string = 'all';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private mockApiService: MockApiService) {}

  ngOnInit(): void {
    this.mockApiService.fetchData().subscribe(
      (response: any) => {
        this.users = response;
        this.originalDataSource = new MatTableDataSource(response.users);
        this.dataSource = new MatTableDataSource(response.users);
        this.dataSource.paginator = this.paginator;
      },
      (err) => {
        console.log('Error fetching data: ', err);
      }
    );
  }



  onChange($event: any) {
    if ($event.value === 'all') {
      this.dataSource = this.originalDataSource;
    } else {
      let filteredData = _.filter(this.users.users, (user) => {
        return user.gender.toLowerCase() == $event.value.toLowerCase();
      });
      this.dataSource = new MatTableDataSource(filteredData);
    }
    this.dataSource.paginator = this.paginator;
  }
}

