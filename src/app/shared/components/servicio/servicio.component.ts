import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Service } from '../../models/servicios.models';
import { FormComponent } from '../form/form.component';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  @Input() service: Service;
  @Output() public updateView = new EventEmitter();
  
  constructor( private servicioService: ServiciosService ) { }

  ngOnInit() {
  }

  // Eliminar de la Lista 
  deleteService(id) {
    this.servicioService.deleteService(id);
    // actualiza vista
    this.updateView.emit(id);
  }
  cancelDelete() {
    
  }

  // Editar Servicio
  editService(service) {
    FormComponent.editService.next(service);
  }
}
