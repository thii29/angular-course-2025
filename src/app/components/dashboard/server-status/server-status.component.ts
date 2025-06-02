import { Component, DestroyRef, OnInit, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline')
  //private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(()=>{
      console.log(this.currentStatus())
    });
  }
  ngOnInit() {
    // this.interval = setInterval(()=>{})
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.9999999999999
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('After view init');
  }
  // need to add implement OnDestroy when using this method
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
