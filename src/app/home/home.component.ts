import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    title = 'Portfolio';
 
  fullText = 'Hi !!! Recruter my name is SUBRATA DAS';
  displayedText = '';
  showDots = false;

  ngOnInit(): void {
    this.animateText();
  }

  animateText() {
    let i = 0;
    const interval = setInterval(() => {
      if (i < this.fullText.length) {
        this.displayedText += this.fullText.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        this.showDots = true;
      }
    }, 150); // adjust speed here
  }

}
