import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headers = [];
  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headers = this.headerService.headers;
  }

}
