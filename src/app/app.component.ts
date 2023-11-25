import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import {MatButtonModule} from '@angular/material/button'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'app';
  currentTheme = 'darkMode';
  @HostBinding('class') className = '';

  constructor(private overlay: OverlayContainer) {}
  ngOnInit(): void {
    this.className = this.currentTheme;
    this.overlay.getContainerElement().classList.add(this.currentTheme);
  }
}
