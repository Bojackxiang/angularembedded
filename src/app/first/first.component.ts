import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private cookieService: CookieService) { }



  ngOnInit() {
    console.log("cookie services");
    let cookieResult = this.cookieService.get('rentbetter_auth');
    console.log(cookieResult);
    this.cookieService.set('hello', 'world');
    let world = this.cookieService.get('hello');
    console.log(world);
    const allCookies: {} = this.cookieService.getAll();
    console.log(allCookies);
    
  }

}
