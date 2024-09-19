import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksRoutingModule } from './blocks-routing.module';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { ToastComponent } from './components/toast/toast.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

const NgPrimeModule = [ProgressSpinnerModule, ToastModule]

@NgModule({
  declarations: [
    AppLayoutComponent,
    ToastComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    NgPrimeModule
  ]
})
export class BlocksModule { }
