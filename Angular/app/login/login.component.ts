import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private dataservice: DataService) { }

  ngOnInit() {
  }

  toUser()
  {
    this.router.navigate(['createuser']);
    this.dataservice.message = '';
  }
  
  login()
  {
    this.dataservice.login();
  }
}
