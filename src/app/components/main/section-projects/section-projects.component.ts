import { Component } from '@angular/core';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss']
})
export class SectionProjectsComponent {

  public projects = [
    {
      name: 'WeGrowers',
      path: '../../../../assets/projects/wegrowers.png',
      description: $localize`Uma Aplicação para unir produtores a prestadores de serviço do AGRO`
    },
    {
      name: $localize`Em Breve`,
      path: null,
      description: $localize`Esperando um novo projeto aparecer`
    },
    {
      name: $localize`Em Breve`,
      path: null,
      description: $localize`Esperando um novo projeto aparecer`
    },
    {
      name: $localize`Em Breve`,
      path: null,
      description: $localize`Esperando um novo projeto aparecer`
    },
    {
      name: $localize`Em Breve`,
      path: null,
      description: $localize`Esperando um novo projeto aparecer`
    },
    {
      name: $localize`Em Breve`,
      path: null,
      description: $localize`Esperando um novo projeto aparecer`
    },

  ]

}
