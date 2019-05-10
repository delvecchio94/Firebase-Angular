import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AppMaterialModule
  ],
  exports: [HeaderComponent]
})
export class LayoutModule { }
