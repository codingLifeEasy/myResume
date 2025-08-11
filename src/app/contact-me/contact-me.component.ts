import { Component } from '@angular/core';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
   web3formsKey = 'abdaaea2-4798-438d-bd72-c5cbf0eaf9a4'; // Replace with your actual key
  loading = false;
  successMessage = '';
  errorMessage = '';

  async onSubmit(form: any) {
    if (form.invalid) return;

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formData = new FormData();
    formData.append('access_key', this.web3formsKey);
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('message', form.value.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        this.successMessage = 'Message sent successfully!';
        form.reset();
      } else {
        this.errorMessage = 'Failed to send message. Please try again.';
      }
    } catch (error) {
      this.errorMessage = 'An error occurred. Please try again.';
    } finally {
      this.loading = false;
    }
  }
}
