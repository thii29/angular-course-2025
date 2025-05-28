import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ServerStatusComponent } from './components/dashboard/server-status/server-status.component';
import { TrafficComponent } from './components/dashboard/traffic/traffic.component';
import { TicketsComponent } from './components/dashboard/tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
