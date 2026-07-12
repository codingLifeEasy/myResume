import { Component } from '@angular/core';
interface Project { title: string; subtitle: string; period: string; description: string; highlights: string[]; metrics: {label:string;value:string}[]; tech: string[]; icon: string; }
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Azure Databricks Lakehouse',
      subtitle: 'BPS Operational Reporting - KPMG Netherlands',
      period: 'Jun 2024 - Present',
      description: 'Designed and built a scalable Databricks-PySpark lakehouse for KPMG\'s Business Process Solutions team, enabling automated SLA reporting and operational analytics for 400+ daily users.',
      highlights: [
        'Architected Delta Lake ingestion pipelines processing 400K+ daily records from multiple source systems',
        'Optimized PySpark transformations reducing pipeline runtime by 45%',
        'Built automated SLA dashboards in Power BI with real-time data refresh',
        'Implemented Unity Catalog for data governance and access control'
      ],
      metrics: [{label:'Throughput Gain',value:'+45%'},{label:'Daily Users',value:'400+'},{label:'Critical Failures',value:'0'}],
      tech: ['PySpark','Databricks','Delta Lake','ADLS Gen2','ADF','Power BI'],
      icon: 'fa-database'
    },
    {
      title: 'ETL Modernisation Initiative',
      subtitle: 'SSIS to Azure Data Factory Migration',
      period: 'Jun 2023 - May 2024',
      description: 'Led the migration of 50+ legacy SSIS ETL packages to modern Azure Data Factory pipelines with Databricks transformation layer, reducing execution time and improving maintainability.',
      highlights: [
        'Re-engineered 50+ SSIS packages into modular ADF pipelines with Databricks transformations',
        'Implemented parallel processing reducing overall pipeline execution time by 35%',
        'Created reusable ADF template library cutting new pipeline setup time by 60%',
        'Set up Azure Monitor alerting for proactive issue detection and resolution'
      ],
      metrics: [{label:'Pipelines Migrated',value:'50+'},{label:'Exec Time Reduced',value:'-35%'},{label:'Setup Time Saved',value:'-60%'}],
      tech: ['ADF','Databricks','Python','SQL Server','SSIS','Power BI'],
      icon: 'fa-arrow-right-arrow-left'
    },
    {
      title: 'Data Platform Infrastructure & CI-CD',
      subtitle: 'Cloud Administration & Team Enablement',
      period: 'Sep 2022 - May 2023',
      description: 'Managed cloud infrastructure for the enterprise data platform, establishing CI-CD pipelines and onboarding practices that scaled the team from 3 to 6 engineers.',
      highlights: [
        'Administered Databricks workspace with Unity Catalog for 15+ users across multiple environments',
        'Built CI-CD pipelines in Azure DevOps for automated ADF and Databricks notebook deployments',
        'Mentored 2 junior data engineers through structured code reviews and pair programming',
        'Created comprehensive runbooks enabling self-service platform operations'
      ],
      metrics: [{label:'Team Size',value:'3 to 6'},{label:'Engineers Mentored',value:'2'},{label:'Environments',value:'3'}],
      tech: ['Azure DevOps','Databricks','ADF','Unity Catalog','Python','CI/CD'],
      icon: 'fa-cloud'
    }
  ];
}