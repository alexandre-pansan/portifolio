import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [       // metadata array
    trigger('toggleClick', [     // trigger block
      state('true', style({      // final CSS following animation
        maxHeight: '10.5em'
      })),
      state('false', style({
        maxHeight: '0px'
      })),
      transition('true => false', animate('500ms ease')),  // animation timing
      transition('false => true', animate('500ms ease'))
    ]),
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('500ms ease',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('500ms ease',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HeaderComponent {
  public menuOpen: Boolean = false;
  public isFullMenu: boolean = true;
  private windowSize: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowSize = window.innerWidth


    window.innerWidth <= 700 ? this.isFullMenu = false : this.isFullMenu = true;

  }

  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    this.windowSize = window.innerWidth
    if (this.windowSize <= 700) {
      this.isFullMenu = false
    }

    //window.innerWidth <= 700 ? this.canOpenMenu = true : this.canOpenMenu = false;
    //window.innerWidth <= 700 ? this.menuOpen = false : this.menuOpen = true;


  }


  clickMenu() {

    this.menuOpen = !this.menuOpen

  }

}
