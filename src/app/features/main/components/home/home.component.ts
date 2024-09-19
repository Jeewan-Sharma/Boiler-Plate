import { Component, OnInit } from '@angular/core';
import { LoaderService, ToastService } from '@core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(
    private _loaderService: LoaderService,
    private _toastService: ToastService
  ) { }

  ngOnInit(): void {
    this._loaderService.showLoader()
    setTimeout(async () => {
      this._loaderService.hideLoader();
      this._toastService.showSuccess({
        message: `Page Loaded Successfully`,
      });
    }, 2000)
  }
}
