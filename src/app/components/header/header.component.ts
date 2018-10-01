import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../service/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sidenav: SideNavService) { }

  ngOnInit() {
  }

  openSidenav() {
    this.sidenav.open();
 }

}
