import {Component, OnInit} from '@angular/core';
import {VersionCheckService} from './version-check.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cache-demo-app';


  constructor(private versionCheckService: VersionCheckService) {
  }

  ngOnInit(): void {
    this.versionCheckService.initVersionCheck(environment.versionCheckURL);
  }


}
