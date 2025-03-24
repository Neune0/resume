import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typing-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typing-text.component.html',
  styleUrls: ['./typing-text.component.css']
})
export class TypingTextComponent implements OnInit {
  @Input() text: string = '';
  @Input() typingSpeed: number = 100; // milliseconds per carattere
  @Input() startDelay: number = 500; // ritardo iniziale
  @Input() showCursor: boolean = true;

  displayedText: string = '';
  private currentIndex: number = 0;
  private typingInterval: any;

  ngOnInit() {
    this.startTyping();
  }

  private startTyping() {
    // Aspetta il delay iniziale prima di cominciare
    setTimeout(() => {
      this.typingInterval = setInterval(() => {
        if (this.currentIndex < this.text.length) {
          this.displayedText += this.text.charAt(this.currentIndex);
          this.currentIndex++;
        } else {
          clearInterval(this.typingInterval);
        }
      }, this.typingSpeed);
    }, this.startDelay);
  }
  
}