import {Photo} from "./photo";

export class Organization {
  public id: number;
  public logo: Photo;
  public  name: string ;
  public conference: any;
  public tags: string;
  constructor( logo = new Photo('https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg'), name = 'ds' ) {
    this.logo = logo;
    this.name = name;
    this.conference = new Array<String>();
    this.conference.push('конференция1', 'Конференция2');
  }}
