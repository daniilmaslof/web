import {Photo} from './photo';

export class Speaker {
  public photo: Photo;
  public  name: string ;
  public  surName: string ;
  public  otchestvo: string;
  public  informationSpeaker: string;
  public  tagsSpeaker: string;
  public  link: string[];
  constructor(photo = new Photo('http://frilka.com/wp-content/uploads/2013/02/4.jpg'),
              name = 'чувак 1',
              surName = '',
              otchestvo = '',
              informationSpeaker = '',
              tagsSpeaker = '',
              link = []
  ) {
    this.name = name;
    this.informationSpeaker = informationSpeaker;
    this.link = link;
    this.otchestvo = otchestvo;
    this.tagsSpeaker = tagsSpeaker;
    this.photo = photo;
  }
}
