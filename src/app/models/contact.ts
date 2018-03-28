import {Photo} from "./photo";

export class Contact {
  photo: Photo;
  mail: string;
  phone: string;
  link: string;
  constructor(photo: Photo = new Photo(''), mail: string = '', phone: string = '', link: string = '') {
    this.photo = photo;
    this.mail = mail;
    this.phone = phone;
    this.link = link;
  }
}
