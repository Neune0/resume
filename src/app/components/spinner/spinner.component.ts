import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @ViewChild('spinnerImage') spinnerImage!: ElementRef;
  
  imageUrl = 'assets/images/black-cap.png'; // Il percorso della tua immagine
  isSpinning = false;
  
  ngOnInit() {
    // Avvia l'animazione quando il componente viene inizializzato
    setTimeout(() => {
      this.startSpinner();
    }, 100); // Piccolo ritardo per assicurarsi che il DOM sia pronto
  }
  
  startSpinner() {
    // Reset prima di avviare una nuova animazione
    this.isSpinning = false;
    
    // Necessario per forzare il re-render e applicare di nuovo l'animazione
    setTimeout(() => {
      this.isSpinning = true;
    }, 10);
  }
}