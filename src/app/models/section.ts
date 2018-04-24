import {Photo} from "./photo";
import {Lecture} from "./lecture";
import {Contact} from "./contact";

export class Section {
  public conference_id: number
  public section_id: number;
  public logo: Photo;
  public  name: string ;
  public  contact: Contact ;
  public shortInfAboutSection: string;
  public  materials: string;
  public  tagsSection: string[];
  public lection_hall;
  public  lections: Array<Lecture>;
  constructor(  conference_id = 0,
                section_id = 0,
                logo = new Photo('http://www.kuzov-media.ru/upload/medialibrary/00f/072101-1.jpg'),
                name = 'Философия и оброзования',
                tagsSection = [],
                lection_hall = '',
  shortInfAboutSection = ''
  ) {
    this.shortInfAboutSection = shortInfAboutSection;
    this.conference_id = conference_id;
    this.section_id = section_id;
    this.tagsSection = tagsSection;
    this.lection_hall = lection_hall;
    this.logo = logo;
    this.name = name;
    this.contact = new Contact();
    this.materials = '';
    this.tagsSection = [];
    this.lections = [];
    this.lections.push(new Lecture());
    this.lections.push(new Lecture('12'));
  }
}
