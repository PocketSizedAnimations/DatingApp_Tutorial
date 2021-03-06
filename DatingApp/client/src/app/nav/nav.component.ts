import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/users';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor(public accountService: AccountService, private router: Router,
        private toastr: ToastrService) { }

  ngOnInit() {
  }

  login()
  {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response =>
      {
        console.log(response);
        this.router.navigateByUrl('/members');
            }, error =>
      {
        this.toastr.error(error.error);
        console.log(error);
      })
  }

  logout()
  {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }


}
