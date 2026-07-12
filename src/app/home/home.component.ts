import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'Data Engineer Portfolio';
  displayText = '';
  fullTexts = ['Data Engineer', 'PySpark Developer', 'Azure Databricks Specialist', 'ETL Pipeline Architect'];
  textIndex = 0; charIndex = 0; isDeleting = false;
  private typingTimer: any;

  ngOnInit(): void { this.startTyping(); }
  ngOnDestroy(): void { if (this.typingTimer) clearTimeout(this.typingTimer); }

  startTyping() {
    const currentText = this.fullTexts[this.textIndex];
    const speed = this.isDeleting ? 50 : 100;
    if (!this.isDeleting) {
      this.displayText = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
      if (this.charIndex === currentText.length) {
        this.isDeleting = true;
        this.typingTimer = setTimeout(() => this.startTyping(), 2000);
        return;
      }
    } else {
      this.displayText = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.fullTexts.length;
      }
    }
    this.typingTimer = setTimeout(() => this.startTyping(), speed);
  }
}