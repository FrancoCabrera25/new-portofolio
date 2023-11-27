import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatSlideToggleModule,
    HeaderComponent,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (localStorage.getItem('theme')) {
      this.themeColor = localStorage.getItem('theme') as string;

      const body = document.getElementsByTagName('body')[0];
      body.classList.add(this.themeColor);
    }
  }
  title = 'app';
  public themeColor: string = 'light-theme';

  public changeTheme(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(this.themeColor);

    this.themeColor === 'dark-theme'
      ? (this.themeColor = 'light-theme')
      : (this.themeColor = 'dark-theme');

    body.classList.add(this.themeColor);
    localStorage.setItem('theme', this.themeColor);
  }
}
