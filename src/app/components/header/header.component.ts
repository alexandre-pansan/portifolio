import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuOpen: Boolean = true;
  private provOption: boolean = true;
  private windowSize: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowSize = window.innerWidth

    window.innerWidth <= 700 ? this.menuOpen = false : this.menuOpen = true;

  }

  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    this.windowSize = window.innerWidth
    if (this.menuOpen && this.windowSize <= 700)
      this.menuOpen = false
    //window.innerWidth <= 700 ? this.canOpenMenu = true : this.canOpenMenu = false;
    //window.innerWidth <= 700 ? this.menuOpen = false : this.menuOpen = true;


  }


  clickMenu() {

    this.menuOpen = !this.menuOpen

  }

}
