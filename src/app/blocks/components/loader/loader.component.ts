import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading!: BehaviorSubject<boolean>;
  constructor(private _loadingService: LoaderService) {
    this.isLoading = this._loadingService.loading$;
  }
}
