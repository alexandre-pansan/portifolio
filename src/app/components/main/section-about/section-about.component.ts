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
      path: '../../../../assets/logos/html5.svg',
      description: $localize`HTML5: A linguagem de marcação que é usada para estruturar e exibir conteúdo na web. O HTML5 é a versão mais recente do HTML e oferece recursos mais avançados, como tags semânticas, suporte para multimídia e APIs para aplicativos web.`
    },
    {
      path: '../../../../assets/logos/css3.svg',
      description: $localize`CSS3: A linguagem de estilo que é usada para definir a aparência dos elementos HTML. O CSS3 oferece recursos mais avançados, como gradientes, sombras, transições e animações.`
    },
    {
      path: '../../../../assets/logos/javascript.svg',
      description: $localize`JavaScript: A linguagem de programação que é usada para adicionar interatividade e dinamismo aos elementos HTML e CSS de uma página web. O JavaScript é amplamente utilizado para criar aplicativos web, jogos e outras soluções interativas na web.`
    },
    {
      path: '../../../../assets/logos/angular.svg',
      description: $localize`Angular: Um framework de JavaScript de código aberto que é usado para criar aplicativos web de uma única página (SPA) complexos e escaláveis. O Angular oferece recursos avançados, como injeção de dependência, vinculação de dados bidirecional e detecção de alterações.`
    },
    {
      path: '../../../../assets/logos/react.svg',
      description: $localize`ReactJS: Um framework de JavaScript de código aberto que é usado para criar interfaces de usuário complexas e interativas em aplicativos web. O ReactJS usa uma abordagem baseada em componentes para criar interfaces de usuário reutilizáveis e escaláveis.`
    },
    {
      path: '../../../../assets/logos/vue.svg',
      description: $localize`VueJS: Um framework de JavaScript de código aberto que é usado para criar interfaces de usuário interativas e escaláveis em aplicativos web. O VueJS é conhecido por sua simplicidade e facilidade de aprendizado, e é amplamente utilizado em aplicativos web de pequeno a médio porte.`
    },
    {
      path: '../../../../assets/logos/nodejs.svg',
      description: $localize`Node.js: Uma plataforma de desenvolvimento em tempo de execução que permite aos desenvolvedores executar o JavaScript no lado do servidor. O Node.js é amplamente utilizado para criar aplicativos web escaláveis e de alto desempenho.`
    },
    {
      path: '../../../../assets/logos/springboot.svg',
      description: $localize`Spring Boot: Um framework de desenvolvimento de aplicativos Java que é usado para criar aplicativos web escaláveis e de alto desempenho. O Spring Boot oferece recursos avançados, como configuração automática, contêiner embutido e dependências gerenciadas, o que facilita a criação de aplicativos web complexos em Java.`
    }
  ]

}
