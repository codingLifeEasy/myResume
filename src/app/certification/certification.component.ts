import { Component } from '@angular/core';
interface Certification { title: string; issuer: string; image: string; link: string; date?: string; }
@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent {
  certifications: Certification[] = [
    {
      title: 'Microsoft Certified: Azure Administrator (AZ-104)',
      issuer: 'Microsoft',
      image: 'assets/Az-104.png',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/Subratadasworking-9395/EA067892AFFF3266?sharingId=E1477A61EDFD8A55',
      date: '2024'
    }
  ];
}