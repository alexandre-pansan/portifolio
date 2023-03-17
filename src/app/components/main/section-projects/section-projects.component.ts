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
      path: 'assets/projects/wegrowers.png',
      description: `A mobile APP to connect farm owners and workers to related service providers`
    },
    {
      name: `Soon`,
      path: null,
      description: `Space waiting for a new project`
    },
    {
      name: `Soon`,
      path: null,
      description: `Space waiting for a new project`
    },
    {
      name: `Soon`,
      path: null,
      description: `Space waiting for a new project`
    },
    {
      name: `Soon`,
      path: null,
      description: `Space waiting for a new project`
    },
    {
      name: `Soon`,
      path: null,
      description: `Space waiting for a new project`
    },

  ]

}
