import { Component, OnInit, ɵConsole } from '@angular/core';
import { ImagenService } from '../servicios/imagen.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { Imagen } from '../interfaces/imagen';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
 // API_ENDPOINT = '#';
 //imagen: Imagen[];
  constructor(private imagenService:ImagenService, private  httpClient : HttpClient) {/*
    httpClient.get(this.API_ENDPOINT + '#').subscribe((data: Imagen[]) => {
      this.imagen = data;
    });*/
   }
  ngOnInit() {
  }
}
