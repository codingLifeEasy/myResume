import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
    skills = [
    { name: 'Angular', icon: 'assets/angular2.webp' },
    { name: 'css', icon: 'assets/css.jpg' },
    { name: 'Rxjs', icon: 'assets/Rxjs.jpg' },
    { name: 'Typescript', icon: 'assets/typescipt1.png' },
    { name: 'Visual Studio Code', icon: 'assets/visulastudio.png' },
    { name: 'HTML5', icon: 'assets/html.jpg' },
    { name: 'CSS3', icon: 'assets/css.jpg' },
    { name: 'Node Js', icon: 'assets/nodejs.webp' },
    { name: 'Bootstrap', icon: 'assets/bootstrap.jpg' },
    { name: 'Python', icon: 'assets/python.jpg' },
    { name: 'Python Rest FrameWork', icon: 'assets/djRestFramework.png' },
    { name: 'IIS', icon: 'assets/IIS.jpg' },
    { name: 'mySql', icon: 'assets/mysql-logo.svg' },
    { name: 'javaScript', icon: 'assets/javascript.png' },
  ];
}
