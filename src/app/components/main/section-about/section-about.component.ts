import { Component } from '@angular/core';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss']
})
export class SectionAboutComponent {

  public skills = [
    {
      path: '../../../../assets/logos/angular.svg',
      description: "Um framework Javascript"
    },
    {
      path: '../../../../assets/logos/css3.svg',
      description: "O que deixa tudo mais viadao"
    }
    ,
    {
      path: '../../../../assets/logos/html5.svg',
      description: "o que da estrutura para a viaagem toda"
    }
    ,
    {
      path: '../../../../assets/logos/javascript.svg',
      description: "O cara que comanda tudo"
    }
    ,
    {
      path: '../../../../assets/logos/react.svg',
      description: "Um framework chato pra caralho"
    }
    ,
    {
      path: '../../../../assets/logos/vue.svg',
      description: "Um framework menos chato mas esquisito"
    }
    ,
    {
      path: '../../../../assets/logos/nodejs.svg',
      description: "Um framework Javascript"
    }
    ,
    {
      path: '../../../../assets/logos/springboot.svg',
      description: "Um framework Java"
    }
  ]

}
