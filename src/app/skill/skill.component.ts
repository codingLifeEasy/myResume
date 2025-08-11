import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

    skills = [
    { name: 'Angular', icon: 'assets/angular2.webp',catego: 'web' },
    { name: 'css', icon: 'assets/css.jpg',catego: 'web' },
    { name: 'Rxjs', icon: 'assets/Rxjs.jpg',catego: 'web' },
    { name: 'Typescript', icon: 'assets/typescipt1.png',catego: 'web' },
    { name: 'Visual Studio Code', icon: 'assets/visulastudio.png',catego: 'other' },
    { name: 'HTML5', icon: 'assets/html.jpg' ,catego: 'web'},
    { name: 'CSS3', icon: 'assets/css.jpg',catego: 'web' },
    { name: 'Node Js', icon: 'assets/nodejs.webp',catego: 'backend' },
    { name: 'Bootstrap', icon: 'assets/bootstrap.jpg',catego: 'web' },
    { name: 'Python', icon: 'assets/python.jpg',catego: 'backend' },
    { name: 'Django Rest FrameWork', icon: 'assets/djRestFramework.png',catego: 'backend' },
    { name: 'IIS', icon: 'assets/IIS.jpg',catego: 'other' },
    { name: 'mySql', icon: 'assets/mysql-logo.svg',catego: 'database' },
    { name: 'postgresql', icon: 'assets/post.png',catego: 'database' },
    { name: 'javaScript', icon: 'assets/javascript.png',catego: 'web' },
    { name: 'Azure Administrator', icon: 'assets/Azureasso.png',catego: 'other' },
    { name: 'Oauth2 Authetication', icon: 'assets/oauth-2.png',catego: 'other' },
    { name: 'Azure FireWall', icon: 'assets/Azureasso.png',catego: 'other' },
  ];
  selectedSkills: {name:string, icon: string ,catego: string }[] = this.skills;
  clickedSkill(value:string){
    if(value === 'all'){
      this.selectedSkills = this.skills
    }
    else if(value === 'web'){
        this.selectedSkills = this.skills.filter(skill => skill.catego === 'web');
      
      }
    else if(value === 'backend'){
        this.selectedSkills = this.skills.filter(skill => skill.catego === 'backend');
      
      }
    else if(value === 'other'){
        this.selectedSkills = this.skills.filter(skill => skill.catego === 'other');
      
      }
    else if(value === 'database'){
        this.selectedSkills = this.skills.filter(skill => skill.catego === 'database');
      
      }
    }

  }
