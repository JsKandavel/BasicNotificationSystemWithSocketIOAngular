import { Component, OnInit } from '@angular/core';
  import { io } from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'socket-client';
  private socket: any;
  public data: any;

  constructor() {
        this.socket = io('http://127.0.0.1:3000');
  }

  public ngOnInit(): void {
    this.socket.on('notification', (data: any) => {
      this.data = data.data.message;
      console.log('data', this.data)
    });
  }
}
