import { Component, OnInit, OnDestroy } from '@angular/core';
import { Service, Category } from '../shared/models/servicios.models';
import { ServiciosService } from '../shared/services/servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ServiciosService ]
})
export class HomeComponent implements OnInit, OnDestroy{

  public listServices: Service[];
  public listCategories: Category[];
 
  public title: string;

  constructor( private servicioService: ServiciosService ) { }

  ngOnInit() {
    // Inicializa data fake
    this.servicioService.setListServices();
    this.listCategories = this.servicioService.getListTipos();
    this.getAll();
  }

  ngOnDestroy() {
    // Limpia el Storage
    this.servicioService.removeListServices();
  }

  // Filtrar por Tipo de Servicio
  public filterList(tipo) {
    this.title = tipo.name;
    this.listServices = this.servicioService.getFilterListServices(tipo.id);
  }

  // Mostrar Todos 
  public showAll() {
    this.title = "";
    this.getAll();
  }

  // Obtener todos los servicios
  public getAll() {
    this.listServices = this.servicioService.getListServices();
  }

}
