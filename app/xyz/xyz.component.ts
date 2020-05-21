import { Component, OnInit } from '@angular/core';
import { FormserviceService} from '../formservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  employees;
  employeesLength;
  model: any = {};
  userid;

  constructor(private api:FormserviceService,private http:HttpClientModule,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.api.getEmployee().subscribe(data=>{
      console.log(data);
      this.employees=data;
      this.employeesLength=this.employees.length;
    })
  }
  deleteEmployee(id){
    var r = confirm("Do you want to delete?")
    if(r){
      this.api.deleteEmployee(id).subscribe(data=>{
        this.ngOnInit();
      })
    } 
  //   this.api.getSingleEmployee(this.userid).subscribe(data=>{
  //     this.model=data[0];
  //     console.log(data)
  //   })
  // }
  // onSubmit(){
  //   console.log(this.model,this.userid);
  //   this.api.getUpdatedEmployee(this.model,this.userid).subscribe(data=>{
  //     this.router.navigate(['xyz']);
  //   })
  }
  
}

