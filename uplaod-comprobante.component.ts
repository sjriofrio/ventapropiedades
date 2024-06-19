import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-uplaod-comprobante',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ],
  templateUrl: './uplaod-comprobante.component.html',
  styleUrl: './uplaod-comprobante.component.css'
})
export class UplaodComprobanteComponent implements OnInit {
  uploadForm = new FormGroup({
    comprobante: new FormControl(''),
  });
  selectedFile!: File;

  constructor() { }

  ngOnInit(): void {
    this.uploadForm = new FormGroup({
      comprobante: new FormControl('', Validators.required)
    });
  }
  miMetodo(evento: Event) {
    const archivo = (evento.target as HTMLInputElement).files;
    if (archivo) {
      this.selectedFile = archivo[0];
    }
  }

  uploadComprobante() {
    if (this.selectedFile) {
     console.log(this.selectedFile);
    }
  }
}
