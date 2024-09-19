import { Component } from '@angular/core';
import { ToastPositionType } from 'primeng/toast';
import { map, Subscription } from 'rxjs';
import { DeviceWidthService } from 'src/app/core/services/device-width.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  toastPosition!: ToastPositionType;
  screenSizeSubscription!: Subscription;

  constructor(private _deviceWidthService: DeviceWidthService) { }

  ngOnInit() {
    this.screenSizeSubscription = this._deviceWidthService.screenSize$.pipe(
      map(screenSize => {
        if (screenSize === 'sm' || screenSize === 'md') {
          this.toastPosition = "top-center";
        } else {
          this.toastPosition = "bottom-center";
        }
      })
    ).subscribe();
  }

  ngOnDestroy() {
    if (this.screenSizeSubscription) {
      this.screenSizeSubscription.unsubscribe();
    }
  }
}
