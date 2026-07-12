import { Component } from '@angular/core';
interface Experience { title: string; company: string; role: string; period: string; description: string; highlights: string[]; tech: string[]; side: string; }
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Azure Databricks Lakehouse — BPS Ops Reporting',
      company: 'TCS @ KPMG Netherlands', role: 'Data Engineer',
      period: 'Jun 2024 - Present',
      description: 'Building and maintaining a scalable Databricks-PySpark lakehouse for KPMG\'s Business Process Solutions operational reporting platform.',
      highlights: [
        'Designed and implemented Delta Lake ingestion pipelines processing 400K+ daily records',
        'Achieved 45% improvement in pipeline throughput via strategic refactoring and optimization',
        'Zero critical failures across 3 production environments over 12+ months',
        'Built automated SLA dashboards in Power BI serving 400+ daily users',
        'Collaborated with 12+ international team members across time zones'
      ],
      tech: ['PySpark', 'Databricks', 'Delta Lake', 'ADLS Gen2', 'ADF', 'Power BI', 'SQL'],
      side: 'right'
    },
    {
      title: 'ETL Modernisation - SSIS to ADF Migration',
      company: 'TCS @ KPMG Netherlands', role: 'Data Engineer',
      period: 'Jun 2023 - May 2024',
      description: 'Led the migration of legacy SSIS ETL packages to modern Azure Data Factory pipelines with Databricks transformation layer.',
      highlights: [
        'Migrated 50+ SSIS packages to ADF with Databricks notebook transformations',
        'Reduced pipeline execution time by 35% through parallel processing and optimization',
        'Implemented comprehensive monitoring and alerting with Azure Monitor',
        'Designed reusable ADF templates that reduced new pipeline setup time by 60%',
        'Created interactive Power BI dashboards for business stakeholder reporting'
      ],
      tech: ['ADF', 'Databricks', 'Python', 'SQL Server', 'SSIS', 'Power BI', 'Azure Monitor'],
      side: 'left'
    },
    {
      title: 'Cloud Infrastructure & CI-CD for Data Platform',
      company: 'TCS @ KPMG Netherlands', role: 'Data Engineer',
      period: 'Sep 2022 - May 2023',
      description: 'Managed cloud infrastructure and CI-CD pipelines for the enterprise data platform, onboarding new team members.',
      highlights: [
        'Administered Databricks workspaces, Unity Catalog, and RBAC for 15+ users',
        'Set up CI-CD pipelines in Azure DevOps for automated ADF and Databricks deployments',
        'Mentored 2 junior data engineers through structured onboarding and code reviews',
        'Created comprehensive technical documentation and runbooks for platform operations',
        'Served as SPOC for new joiner enablement across the data engineering team'
      ],
      tech: ['Azure DevOps', 'Databricks', 'ADF', 'Unity Catalog', 'Python', 'Git', 'CI/CD'],
      side: 'right'
    }
  ];
}