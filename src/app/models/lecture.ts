import {Speaker} from "./speaker";
import {Photo} from "./photo";

export class Lecture {
  speakers: Array<Speaker>;
  constructor(public topicLecture = '1',
              public  informationLecture = '2',
              public  dateLecture = new Date(),
              public  hallLecture = '4',
              public  tagsLecture = '5',
              public  durationLecture = '6',
              ) {
    this.speakers = new Array<Speaker>();
    let speaker = new Speaker();
    console.log(speaker);
    this.speakers.push(speaker);
    let sp =  new Speaker(new Photo('https://uploadrb.ru/upload/admins/picture/1237/507ab9f409db99d5aaeb46f8652c72d0.jpg'), 'чува2')
    this.speakers.push(sp);
    console.log(this.speakers);
  }
}
