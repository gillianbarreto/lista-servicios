import { Component, OnInit, Input} from '@angular/core';
import { Service } from '../../models/servicios.models';

@Component({
  selector: 'app-list-servicios',
  templateUrl: './list-servicios.component.html',
  styleUrls: ['./list-servicios.component.css']
})
export class ListServiciosComponent implements OnInit {

  // Para paginación
  public page: number = 1;
  public configPg = { previousLabel: "<", nextLabel: ">" };
  public totalServices: number;
  
  @Input() listServices: Service[];

  constructor() { }

  ngOnInit() {
    this.countServices();
  }

  // Actualiza la lista quitando el servicio borrado en servicio.components
  updateView(service) {
    this.listServices = this.listServices.filter(({ id }) => id !== service );
    this.countServices();
  } 

  // Cuenta servicios para despliegue
  countServices() {
    this.totalServices = this.listServices.length;
  }
}
