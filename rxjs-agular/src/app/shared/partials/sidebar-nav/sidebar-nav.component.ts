import { Component, OnInit } from '@angular/core';
import { NAV_LINKS } from '@constants/nav-links.constants';
import { AuthStore } from '@services/auth/auth.store';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {

  sideLinks = NAV_LINKS;

  constructor(public auth: AuthStore) { }

  ngOnInit(): void {
  }
  logout() {
    this.auth.logout();
  }
}
