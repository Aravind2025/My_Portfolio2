import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github. It\'s open for exploration, and you\'re welcome to fork it and create your own version!',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'GitHub Pages', 'Github Actions'],
      src: './assets/projects/portfolio.png',
      link: 'https://github.com/Aravind2025/My_Portfolio',
    },
    {
      name: 'Projects_Machine_Learning',
      description: 'A collection of machine learning projects, including analyses on COVID-19 and diabetes, depression detection using PHQ-9, regression and prediction models, text analysis, and Twitter data analysis.',
      technologies: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn", "Natural Language Processing", "Twitter API"],
      src: './assets/projects/Machine_Learning.jpg',
      link: 'https://github.com/Aravind2025/Projects_Machine_Learning'
    },
    {
      name: 'Data Science Project: The Battle of Neighborhoods',
      description: 'A data science project analyzing Tallinn\'s neighborhoods using data from Foursquare, Wikipedia, and transport sites. It identifies ideal residential areas through clustering and regression techniques.',
      technologies: ['Python', 'Jupiter Notebook', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Foursquare API'],
      src: './assets/projects/data-science.png',
      link: 'https://github.com/SebastianoFazzino/IBM-Data-Science-Professional-Certificate/tree/main/Applied%20Data%20Science%20Capstone',
    }
  ];
}
