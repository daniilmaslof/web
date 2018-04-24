import {Photo} from "./photo";
import {Section} from "./section";

export class Sections {
  sections:  Array<Section>;
  constructor() {
    this.sections = new Array<Section>();
    let speaker = new Section();
    console.log(speaker);
    this.sections.push(speaker);
    for ( let i = 1; i < 6; i++) {
      let sp = new Section(i, i,
        new Photo('http://www.kuzov-media.ru/upload/medialibrary/00f/072101-1.jpg'));
      this.sections.push(sp);
    }
  }
}
