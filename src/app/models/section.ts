import {Photo} from "./photo";
import {Lecture} from "./lecture";
import {Contact} from "./contact";

export class Section {
  public logo: Photo;
  public  name: string ;
  public  contact: Contact ;
  public  materials: string;
  public  tagsSection: string;
  public  lection: Array<Lecture>;
  constructor( logo = new Photo('https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg'), name = 'ds' ) {
    this.logo = logo;
    this.name = name;
    this.contact = new Contact();
    this.materials = '';
    this.tagsSection = '';
    this.lection = [];
    this.lection.push(new Lecture());
  }
}
