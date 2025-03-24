import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faEnvelope, faPhone, faMapMarkerAlt, faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-cv-page',
  imports: [CommonModule, FontAwesomeModule,MatIconModule,MatTabsModule],
  standalone: true,
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.css'
})
export class CvPageComponent {
  projects:Project[] = [];
  education:Edu[] = [];
  techSkills:SkillTech[] = [];
  softSkills:SoftSkill[] = [];
  workExperience:WorkExp[] = [];

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarker = faMapMarkerAlt;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFile = faFile;

}

class Project{
  name:String;
  description:String;
  link:String;
  constructor(name:String, description:String,link:String){
    this.name = name;
    this.description = description;
    this.link=link;
  }
}

class Edu{
  institution:String;
  period:String;
  description:String;
  degree:String;

  constructor(institution:String, period:String, description:String,degree:String){  
    this.institution = institution;
    this.period = period;
    this.description = description;
    this.degree = degree;
  }
  
}

class SkillTech{
  name:String;
  description:String;
  constructor(name:String, description:String){
    this.name = name;
    this.description = description;
  }
}

class SoftSkill{
  name:String;
  description:String;
  constructor(name:String, description:String){
    this.name = name;
    this.description = description;
  }
}

class WorkExp{
  title:String;
  company:String;
  period:String;
  description:String;

  constructor(title:String, company:String, period:String, description:String){
    this.title = title;
    this.company = company;
    this.period = period;
    this.description = description;
  }
}




