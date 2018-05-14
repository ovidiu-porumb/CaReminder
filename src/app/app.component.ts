import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // this property can be interpolated in app.component.html even if is private
  private readonly appTitle: string = 'CaReminder';

  private titleService: Title;

  // this will show the fact that ngOnInit runs after the ctor below (double check?)
  ngOnInit(): void {
    console.log("From ngOnit in AppComponent");
    this.setAppTitle();
  }

  public constructor(titleService: Title) {
    console.log("From constructor in AppComponent");
    this.titleService = titleService;
  }

  public setAppTitle(): void {
    this.titleService.setTitle(this.appTitle);
  }
}
