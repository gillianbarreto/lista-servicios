import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Service } from '../../models/servicios.models';
import { Subject } from 'rxjs';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public service: Service;
  public static editService: Subject<boolean> = new Subject();

  constructor( private servicioService: ServiciosService ) {
    FormComponent.editService.subscribe(data => {
      this.initForm(data);
    })
   }

  ngOnInit() {
    this.service = { id: 0, name: "", description: "", category: 0 };
  }

  // Actualizar 
  updateService(data) {
    if (this.service.id == 0) return;
    this.service.name = data.value.name;
    this.service.description = data.value.description;
    this.servicioService.updateService(this.service);
  }
  
  initForm(service) {
    this.service = service;
  }

}
