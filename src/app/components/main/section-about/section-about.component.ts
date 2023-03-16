import { I18NHtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss']
})
export class SectionAboutComponent {
  constructor() {

  }
  public skills = [
    {
      path: 'assets/logos/html5.svg',
      description: 'HTML5: Hypertext Markup Language version 5 is the latest version of HTML that provides a structure for creating web pages and applications. It includes new features like multimedia support, semantic tags, and canvas for creating animations and graphics.'
    },
    {
      path: 'assets/logos/css3.svg',
      description: 'CSS3: Cascading Style Sheets version 3 is the latest version of CSS that provides styling and layout for web pages and applications. It includes new features like transitions, animations, and responsive design.'
    },
    {
      path: 'assets/logos/javascript.svg',
      description: `JavaScript: A programming language used to create dynamic and interactive web pages and applications. It's commonly used for client-side scripting, but can also be used on the server-side with the help of frameworks like NodeJS.`
    },
    {
      path: 'assets/logos/angular.svg',
      description: `Angular: A TypeScript-based front-end web application framework developed by Google. It's used for building complex and dynamic single-page applications (SPAs).`
    },
    {
      path: 'assets/logos/react.svg',
      description: `ReactJS: A JavaScript library developed by Facebook for building user interfaces. It's used for building reusable UI components and is commonly used for building SPAs.`
    },
    {
      path: 'assets/logos/vue.svg',
      description: `VueJS: A progressive JavaScript framework used for building user interfaces and single-page applications. It's known for its simplicity and ease of use, and has a growing community of developers.`
    },
    {
      path: 'assets/logos/nodejs.svg',
      description: `NodeJS: A JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript code outside of a web browser. It's commonly used for server-side scripting and building scalable network applications.`
    },
    {
      path: 'assets/logos/springboot.svg',
      description: `SpringBoot: A popular Java-based framework for building web applications and microservices. It provides a simple and efficient way to develop production-ready applications quickly and easily.`
    }
  ]

}
