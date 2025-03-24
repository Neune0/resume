import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatDividerModule } from '@angular/material/divider';
import { TypingTextComponent } from './components/typing-text/typing-text.component';
import { CvPageComponent } from './components/cv-page/cv-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    SpinnerComponent,
    MatDividerModule,
    TypingTextComponent,
    CommonModule,
    CvPageComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'resume';
  isDarkTheme = false;
  isSecondScreen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Verifica se il codice è in esecuzione nel browser prima di accedere a localStorage
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkTheme = true;
        document.body.classList.add('dark-theme');
      }
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;

    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkTheme) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    }
  }

  toggleSecondScreen() {
    this.isSecondScreen = !this.isSecondScreen;
  }
}
