import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlocksModule } from './blocks/blocks.module';
import { CoreModule } from './core/core.module';

const Modules = [CoreModule, BlocksModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Modules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TeesCrew';
}
