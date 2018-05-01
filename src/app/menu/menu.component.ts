import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    isTop : boolean;
    isCreate : boolean;
    isSearch : boolean;
    isAbout : boolean;
    isLogin : boolean;
        
    constructor(private router: Router) {
	this.isTop      = false;
	this.isCreate  = false;
	this.isSearch = false;
	this.isAbout  = true;
	this.isLogin   = false;
	
    }

    ngOnInit() {
	this.router.events
	    .subscribe((event) => {
		// example: NavigationStart, RoutesRecognized, NavigationEnd
		if (event instanceof NavigationEnd) {
		    console.log("url", event.url);
		    this.isTop      = false;
		    this.isCreate  = false;
		    this.isSearch = false;
		    this.isAbout  = false;
		    this.isLogin   = false;
		    switch (event.url) {
		    case "/top" :
			this.isTop = true;
			return;
		    case "/create":
			this.isCreate = true;
			return;
		    case "/search":
			this.isSearch = true;
			return;
		    case "/about":
			this.isAbout = true;
			return;
		    case "/login":
			this.isLogin = true;
			return;
		    default:
			this.isTop = true;
		    }
		}
	    });
    }

}
