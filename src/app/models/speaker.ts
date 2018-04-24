import {Photo} from './photo';

export class Speaker {
  public nameLectures:  Array<String>;
  public conference_id: number;
  public section_id: number;
  public lection_id: number;
  public id: number;
  public photo: Photo;
  public  name: string ;
  public  surName: string ;
  public  otchestvo: string;
  public  info: string;
  public  tagsSpeaker: String[];
  public  link: string[];
  public shortInformation: string;
  public  profession: string;
  constructor(
    conference_id = 0,
    section_id = 0,
    lection_id = 0,
    id = 0,
    photo = new Photo('http://frilka.com/wp-content/uploads/2013/02/4.jpg'),
    name = 'Сергей',
    surName = 'Сидоров',
    otchestvo = 'Сергеевич',
    informationSpeaker = '',
    tagsSpeaker = new Array(),
    link = [],
    shortInformation = 'Работет в Максим Банке. Ис. Исполнительный директор и соучредитель. Банкир.',
    profession = 'банкир'
  ) {
    this.profession = profession;
    this.conference_id = conference_id;
    this.section_id = section_id;
    this.lection_id = lection_id;
    this.id = id;
    this.shortInformation = shortInformation;
    this.name = name;
    this.surName = surName;
    this.info = informationSpeaker;
    this.link = link;
    this.otchestvo = otchestvo;
    this.tagsSpeaker = tagsSpeaker;
    this.photo = photo;
    this.tagsSpeaker = new Array<String>();
    this.tagsSpeaker.push('tag');
    this.nameLectures = new Array();
    this.nameLectures.push('лекция 1', 'Математика', 'defoult');
  }
}
