import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml-js';

@Component({
  selector: 'app-asociados',
  templateUrl: './asociados.component.html',
  styleUrls: ['./asociados.component.css'],
})
export class AsociadosComponent {
  cosas: any;
  cositas: any;
  constructor(private http: HttpClient) {}

  hola() {
    this.http.get('/assets/archivo.xml', { responseType: 'text' }).subscribe(
      (xmlData: string) => {
        const jsonData = xml2js.xml2json(xmlData, { compact: true, spaces: 4 });
        const parsedData = JSON.parse(jsonData);
        this.cosas = [parsedData.persona.estudiante]; 
      },
      (error: any) => {
        console.error('Error al cargar el archivo XML:', error);
      }
    );

    this.http.get('/assets/file.json').subscribe(
      (data: any) => {
        this.cositas = data.estudiante;
      },
      (error: any) => {
        console.error('Error al cargar el archivo JSON:', error);
      }
    );
  }
}
