import { Injectable } from '@angular/core';
import { Service, Category } from '../models/servicios.models';

@Injectable()
export class ServiciosService {

  public listServices: Service[];
  public listCategories: Category[];
  private localStorageService;

  constructor() { 
    
    this.localStorageService = localStorage;

    // Asigna data fake
    this.listCategories = [
        { id: 1, name: "Hogar" },
        { id: 2, name: "Salud" },
        { id: 3, name: "Autos" }
      ]; 
    this.listServices = [
        { id: 100, name: "Electricidad", category: 1, 
          description: "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto" },
        { id: 101, name: "Auxilio Mecánico",  category: 3,
          description: "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto" },
        { id: 102, name: "Chofer de Reemplazo",  category: 3,
          description: "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto" },
        { id: 103, name: "Médico a Domicilio",  category: 2,
          description: "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto" },
        { id: 104, name: "Ambulancia",  category: 2,
          description: "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto" },
        { id: 105, name: "Gasfitero",  category: 1,
          description: "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto" }
      ];
  }

  // Devuelve Lista de Tipos de Servicios con data fake
  getListTipos(): Category[] {
    return this.listCategories;
  }

  // Asigna Lista de Servicios con data fake
  setListServices(): void {
    this.localStorageService.setItem('ListServices', JSON.stringify(this.listServices)); 
  }
  setListServiceUpdate(data): void {
    this.localStorageService.setItem('ListServices', JSON.stringify(data)); 
  }

  // Devuelve Lista de Servicios 
  getListServices() {
    let listServices = this.localStorageService.getItem('ListServices');
    return (listServices) ? JSON.parse(listServices) : null;
  }

  // Limpia LocalStorage 
  removeListServices() {
    this.localStorageService.removeItem('ListServices');
  }

  // Filtra por Tipo de Servicios
  getFilterListServices(id): Service[] {
    let listServices = this.localStorageService.getItem('ListServices');
    listServices = JSON.parse(listServices);
    return (listServices) ? listServices.filter(({ category }) => category === id ) : null;
  }

  // Elimina Servicio de la Lista
  deleteService(service) {
    let listServices = this.localStorageService.getItem('ListServices');
    listServices = JSON.parse(listServices);
    listServices = listServices.filter(({ id }) => id !== service );
    this.setListServiceUpdate(listServices);
    return
  }

  // Actualiza Datos del Servicio 
  updateService(service) {
    let listServices = this.localStorageService.getItem('ListServices');
    listServices = JSON.parse(listServices);
    listServices = listServices.filter(({ id }) => id !== service.id );
    listServices.push(service);
    this.setListServiceUpdate(listServices);
  }
}
