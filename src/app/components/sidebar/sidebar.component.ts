import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Početna',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Moji predmeti',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Povratne informacije',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'Moj profil',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Premium',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Logiraj se',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Registruj se',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
