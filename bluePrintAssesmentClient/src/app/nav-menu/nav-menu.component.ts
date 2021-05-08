import { Component, OnInit } from '@angular/core';
import { AddemployeeComponent } from '../addemployee/addemployee.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent extends AddemployeeComponent implements OnInit {

  ngOnInit(): void {
    
  }

}
