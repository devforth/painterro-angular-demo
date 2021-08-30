import { Component, OnInit } from '@angular/core';

// @ts-ignore: Unreachable code error
import Painterro from 'painterro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pad';
  ngOnInit() {
    Painterro().show();
  }
}

