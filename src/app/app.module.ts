import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListServiciosComponent } from './shared/components/list-servicios/list-servicios.component';
import { ServicioComponent } from './shared/components/servicio/servicio.component';
import { FormComponent } from './shared/components/form/form.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListServiciosComponent,
    ServicioComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
