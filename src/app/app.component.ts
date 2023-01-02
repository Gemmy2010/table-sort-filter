import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator } from '@angular/material/paginator'
import {MatTableDataSource } from '@angular/material/table'
import { DataService } from './data.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
   
  displayedColumns: string[] = ['name','username','email'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;





  constructor(private service: DataService){}


  ngOnInit(){
    this.service.getUserData().subscribe((response:any) =>{
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      console.log(response)
    })
  }


  applyFilter($event: any){
    this.dataSource.filter = $event.target.value;
  }
  
  
    
  
  // showSpinner=false;

  // loadData(){
  //   this.showSpinner = true;

  //   setTimeout(() => {
  //     this.showSpinner = false;
  //   }, 5000);
  // }

  
}
