import { Component } from '@angular/core';
interface Skill { name: string; category: string; }
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  categories = [
    { key: 'all', label: 'All' },
    { key: 'cloud', label: 'Cloud & Big Data' },
    { key: 'etl', label: 'ETL & Orchestration' },
    { key: 'languages', label: 'Languages' },
    { key: 'databases', label: 'Databases' },
    { key: 'devops', label: 'DevOps & Tools' }
  ];
  activeCategory = 'all';
  allSkills: Skill[] = [
    { name: 'Azure Databricks', category: 'cloud' },
    { name: 'Azure Synapse Analytics', category: 'cloud' },
    { name: 'Azure Data Lake Gen2', category: 'cloud' },
    { name: 'Delta Lake', category: 'cloud' },
    { name: 'Apache Spark', category: 'cloud' },
    { name: 'Azure Data Factory', category: 'etl' },
    { name: 'Databricks Workflows', category: 'etl' },
    { name: 'SSIS', category: 'etl' },
    { name: 'PySpark', category: 'languages' },
    { name: 'Python', category: 'languages' },
    { name: 'SQL', category: 'languages' },
    { name: 'TypeScript', category: 'languages' },
    { name: 'SQL Server', category: 'databases' },
    { name: 'Azure SQL DB', category: 'databases' },
    { name: 'Power BI', category: 'devops' },
    { name: 'Azure DevOps', category: 'devops' },
    { name: 'CI/CD', category: 'devops' },
    { name: 'Git', category: 'devops' }
  ];
  get filteredSkills(): Skill[] {
    if (this.activeCategory === 'all') return this.allSkills;
    return this.allSkills.filter(s => s.category === this.activeCategory);
  }
  setCategory(cat: string) { this.activeCategory = cat; }
}